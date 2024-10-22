
import { getSession, signOut } from "next-auth/react";
import axios from "axios";

export default async function authFetch<T>(
  url: string,
  method: "GET" | "DELETE" | "POST" | "PUT" = "GET",
  body?: any
): Promise<T | undefined> {
  
  const session = await getSession();

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

    if (error?.response?.status === 401) {
      await signOut();
    }

    return Promise.reject(error.response?.data)

  }
}
