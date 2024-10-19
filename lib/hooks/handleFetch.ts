"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { signOut, useSession } from "next-auth/react";

export type TApiResponse<T> = {
  status: number;
  statusText: string;
  data: T | null;
  error: null | string;
  loading: boolean;
};

const useFetch = <T>(url: string, isAuth?: boolean): TApiResponse<T> => {
  
  const [status, setStatus] = useState<number>(0);
  const [statusText, setStatusText] = useState<string>("");
  const [data, setData] = useState<T | null>(null);
  const [error, setError] = useState<any>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const router = useRouter();
  const { data: session } = useSession();

  useEffect(() => {
    const getAPIData = async () => {
      try {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_BASE_URL}${url}`,
          {
            headers: isAuth
            ? { Authorization: `Bearer ${session?.user?.accessToken}` }
              : undefined,
          }
        );
        const responseData = await response.json();
        if (!response.ok) {
          if (response.status === 401) {
            await signOut({ redirect: false });
            router.push("/login");
          }
          throw new Error(responseData.message || "Something went wrong");
        }
        setStatus(response.status);
        setStatusText(response.statusText);
        setData(responseData);
      } catch (error) {
        setError(error);
      }
      setLoading(false);
    };

    getAPIData();
  }, [isAuth, url, router, session]);

  return { data, error, loading, status, statusText };
};

export default useFetch;
