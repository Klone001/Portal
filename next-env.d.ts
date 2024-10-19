import NextAuth from "next-auth";

declare module "next-auth" {
    interface User {
        accessToken?: string; 
        refreshToken?: string; 
    }

    interface Session {
        user: User;
    }
}

/// <reference types="next" />
/// <reference types="next/image-types/global" />