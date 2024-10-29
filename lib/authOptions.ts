import { Session, User, AuthOptions } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { JWT } from "next-auth/jwt";
import { getErrorMessage } from "@/utils";

const authOptions: AuthOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        emailAddress: { label: "Email Address", type: "text" },
        password: { label: "Password", type: "password" },
        deviceImei: { label: "Device IMEI", type: "text" },
        channel: { type: "number" },
      },
      async authorize(credentials) {
        if (!credentials) {
          throw new Error("Missing credentials");
        }

        const payload = {
          emailAddress: credentials.emailAddress,
          password: credentials.password,
          deviceImei: credentials.deviceImei,
          channel: Number(credentials.channel),
        };

        try {
          const response = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/auth/login`,
            {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify(payload),
            }
          );

          const res = await response.json();

          if (!response.ok || res.statusCode !== 200) {
            throw new Error(res.errorMessage || "Login failed");
          }

          const { accessToken, refreshToken } = res.result;

          // GET USER PROFILE
          const userRes = await fetch(
            `${process.env.NEXT_PUBLIC_API_BASE_URL}/user/get-user-profile`,
            {
              method: "GET",
              headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${accessToken}`,
              },
            }
          );

          const res2 = await userRes.json();

          if (!userRes.ok) {
            throw new Error(res2.errorMessage || "Error fetching user data");
          }

          const user = res2.result;

          return { ...user, accessToken, refreshToken };

        } catch (error) {
          const message = getErrorMessage(error);
          throw new Error(message);
        }
      },
    }),
  ],
  secret: process.env.NEXTAUTH_SECRET,
  callbacks: {

    async jwt({ token, user, trigger, session }: { token: JWT; user?: User; trigger?: string; session?: Session }) {
      
      if (trigger === "update" && session?.user) {
        return { ...token, ...session.user };
      }

      if (user) {
        return { ...token, ...user };
      }

      return token;
    },

    async session({ session, token }: { session: Session; token: JWT }) {
      session.user = token as any;
      return session;
    },
  },

  pages: {
    signIn: "/login",
  },
  debug: process.env.NODE_ENV === "development",
};

export default authOptions;
