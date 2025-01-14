import { getSession, signOut } from "next-auth/react";
import axios from "axios";
import { ApiResponse } from "@/types";

let isRefreshingToken: Promise<ApiResponse> | null = null;

export default async function authFetch<T>(
  url: string,
  updateSession: (session: any) => void,
  method: "GET" | "DELETE" | "POST" | "PUT" = "GET",
  body?: any,
): Promise<T | undefined> {
  const session = await getSession();

  const refreshAccessToken = async (): Promise<ApiResponse> => {
    if (!isRefreshingToken) {
      isRefreshingToken = axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh-token`,
        {
          token: session?.user?.refreshToken,
          userEmail: session?.user?.email
        }
      ).then((response) => {
        isRefreshingToken = null; 
        return response.data;
      }).catch((error) => {
        isRefreshingToken = null; 
        throw error;
      });
    }

    return isRefreshingToken; 
  };

  try {
    const response = await axios({
      url: `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`,
      method,
      headers: {
        Authorization: `Bearer ${session?.user?.accessToken}`,
        Accept: "application/json",
      },
      data: body,
    });

    return response.data;
  } catch (error: any) {
    
    if (error.status ===401) {
      try {
        const newSession = await refreshAccessToken();

        // Update the session here
        updateSession({
          ...session,
          user: {
            ...session?.user,
            accessToken: newSession.result.data?.accessToken,
            refreshToken: newSession.result.data?.refreshToken,
          },
        });

        const retryResponse = await axios({
          url: `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`,
          method,
          headers: {
            Authorization: `Bearer ${newSession.result.data?.accessToken}`,
            Accept: "application/json",
          },
          data: body,
        });

        return retryResponse.data;
      } catch (refreshError) {
        // await signOut();
      }
    }

    return Promise.reject(error.response?.data);
  }
}
