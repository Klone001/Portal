"use server";

import { authOptions } from "@/lib";
import { getServerSession } from "next-auth";
import { signOut } from "next-auth/react";
import { redirect } from "next/navigation";

export default async function authFetch<T>(
  url: string,
  method: "GET" | "DELETE" | "POST" | "PUT" = "GET",
  body?: any
): Promise<T | undefined> {
  const session = await getServerSession(authOptions);

  try {
    const response = await fetch(
      `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`,
      {
        method,
        headers: {
          "Content-Type": "application/json",
          "X-Request-Channel": "3",
          Authorization: `Bearer ${session?.user?.accessToken}`,
        },
        body: body,
      }
    );

    if (!response.ok) {
      if (response.status === 401) {
        const responseData = await response.json();
        if (responseData.message === "Session ended") {
          await signOut({ redirect: false });
          redirect("/login");
        }
      }
      throw new Error(
        `Error fetching data: ${response.status} - ${response.statusText} from ${url}`
      );
    }

    const data: T = await response.json();
    return data;
  } catch (error) {
    console.log(error);
  }
}
