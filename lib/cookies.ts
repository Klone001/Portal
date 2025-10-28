"use server";

import { cookies } from "next/headers";

interface CookieOptions {
    httpOnly?: boolean;
    secure?: boolean;
    maxAge?: number;
    path?: string;
    domain?: string;
    sameSite?: 'lax' | 'strict' | 'none';
}

export async function setCookie(
    cookieName: string,
    cookieValue: string,
    options?: CookieOptions
): Promise<void> {
    cookies().set(cookieName, cookieValue, options);
}

export async function getCookie(cookieName: string): Promise<string | undefined> {
    const cookie = cookies().get(cookieName);
    return cookie?.value;
}

export async function destroyCookie(cookieName?: string): Promise<void> {
    const cookieStore = cookies();

    if (cookieName) {
        cookieStore.delete(cookieName);
    } else {
        const allCookies = cookieStore.getAll();
        allCookies.forEach((cookie) => {
            cookieStore.delete(cookie.name);
        });
    }
}