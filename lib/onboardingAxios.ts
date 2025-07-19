import axios, { AxiosError, AxiosRequestConfig, InternalAxiosRequestConfig } from 'axios';

type FailedRequest = {
    resolve: (token: string) => void;
    reject: (error: any) => void;
};

let accessToken: string | null = null;
let refreshToken: string | null = null;
let userEmail: string | null = null;

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

// ✅ Public function to set tokens + email
export const setTokens = (tokens: {
    access: string;
    refresh: string;
    email: string;
}) => {
    accessToken = tokens.access;
    refreshToken = tokens.refresh;
    userEmail = tokens.email;
};

// ✅ Axios instance
const onboardingAxios = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_BASE_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// ✅ Attach access token to requests
onboardingAxios.interceptors.request.use(
    (config: InternalAxiosRequestConfig) => {
        if (accessToken) {
            config.headers = config.headers || {};
            config.headers.Authorization = `Bearer ${accessToken}`;
        }
        return config;
    },
    (error) => Promise.reject(error)
);

// ✅ Handle 401 and fetch fresh token using email
onboardingAxios.interceptors.response.use(
    (response) => response,
    async (error: AxiosError) => {
        const originalRequest = error.config as AxiosRequestConfig & { _retry?: boolean };

        if (error.response?.status === 401 && !originalRequest._retry && userEmail) {
            if (isRefreshing) {
                return new Promise((resolve, reject) => {
                    failedQueue.push({ resolve, reject });
                })
                    .then((token) => {
                        originalRequest.headers = originalRequest.headers || {};
                        originalRequest.headers.Authorization = `Bearer ${token}`;
                        return onboardingAxios(originalRequest);
                    })
                    .catch((err) => Promise.reject(err));
            }

            originalRequest._retry = true;
            isRefreshing = true;

            try {
                const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/generate-token`, {
                    emailAddress: userEmail,
                });

                const newAccessToken = res?.data?.result.accessToken;
                const newRefreshToken = res?.data?.result.refreshToken;
                
                accessToken = newAccessToken;
                refreshToken = newRefreshToken;
                
                processQueue(null, newAccessToken);

                originalRequest.headers = originalRequest.headers || {};
                originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;

                return onboardingAxios(originalRequest);
            } catch (err) {
                processQueue(err, null);
                throw err;
            } finally {
                isRefreshing = false;
            }
        }

        return Promise.reject(error);
    }
);

export default onboardingAxios;

// ✅ New helper function: fetch initial token
export const initializeOnboardingToken = async (email: string) => {
    try {
        const res = await axios.post(`${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/generate-token`, {
            emailAddress: email,
        });

        const response = res?.data?.result

        const access = response.accessToken;
        const refresh = response.refreshToken;

        if (access && refresh) {
            setTokens({ access, refresh, email });
        } else {
            throw new Error("Token response missing access or refresh token.");
        }
    } catch (err) {
        console.error("Failed to initialize onboarding token:", err);
        throw err;
    }
};
