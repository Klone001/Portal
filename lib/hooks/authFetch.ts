import { getSession } from 'next-auth/react';
import { axios } from '@/lib';

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE';

export const authFetch = async <T>(
  url: string,
  method: HttpMethod = 'GET',
  body?: any,
): Promise<T | undefined> => {

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
  } catch (error) {
    console.error('Error in authFetch:', error);
    throw error;
  }
};
