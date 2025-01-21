import axios, { AxiosError, AxiosRequestConfig } from 'axios';
import { getSession, getCsrfToken, signOut } from 'next-auth/react';

type FailedRequest = {
    resolve: (token: string) => void;
    reject: (error: any) => void;
};

let isRefreshing = false;
let failedQueue: FailedRequest[] = [];

const processQueue = (error: any, token: string | null = null) => {
    failedQueue.forEach((prom) => {
        if (token) {
            prom.resolve(token);
        } else {
            prom.reject(error);
        }
    });
    failedQueue = [];
};

const axiosConfig = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
      Accept: "application/json",
    },
});

const updateSession = async (newSession: Record<string, any>) => {
    try {
        await fetch(`/api/auth/session`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                csrfToken: await getCsrfToken(),
                data: newSession,
            }),
        });
    } catch (error) {
        console.error('Error updating session:', error);
    }
};

axiosConfig.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const originalRequest = error?.config as AxiosRequestConfig & { _retry?: boolean };

        if (error.response?.status === 401 && !originalRequest._retry) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        originalRequest.headers = {
                            ...originalRequest.headers,
                            Authorization: `Bearer ${token}`,
                        };
                        return axiosConfig(originalRequest);
                    })
                    .catch((err) => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {

                const session = await getSession();
                const refreshToken = session?.user?.refreshToken;

                const response = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/refresh-token`, {
                    token: refreshToken,
                    userEmail: session?.user?.email,
                });

                const { accessToken, refreshToken: newRefreshToken } = response.data.result?.data;

                await updateSession({
                    ...session,
                    user: {
                        ...session?.user,
                        accessToken,
                        refreshToken: newRefreshToken,
                    },
                });

                processQueue(null, accessToken);

                originalRequest.headers = {
                    ...originalRequest.headers,
                    Authorization: `Bearer ${accessToken}`,
                };

                return axiosConfig(originalRequest);
            } catch (err) {
                processQueue(err, null);
                await signOut()
                throw err;
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default axiosConfig;
