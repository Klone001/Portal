import { getSession, signOut } from "next-auth/react";
import axios from "axios";
import { ApiResponse } from "@/types";

let isRefreshingToken = false;

export default async function authFetch<T>(
  url: string,
  updateSession: (session: any) => void,
  method: "GET" | "DELETE" | "POST" | "PUT" = "GET",
  body?: any
): Promise<T | undefined> {
  const session = await getSession();

  const refreshAccessToken = async (): Promise<ApiResponse> => {
    isRefreshingToken = true;
    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh-token`,
        {
          token: session?.user?.refreshToken,
          userEmail: "adeoyesolomon2693@gmail.com",
        }
      );
      isRefreshingToken = false; 
      return response.data;
    } catch (error) {
      isRefreshingToken = false;
      throw error;
    }
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
    if (error.message === "Network Error" && !isRefreshingToken) {
      try {

        const newSession = await refreshAccessToken();

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
        await signOut();
      }
    }

    return Promise.reject(error.response?.data);
  }
}
