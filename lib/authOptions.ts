import { Session, TokenSet, User } from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { getErrorMessage } from "@/utils";

const authOptions = {
  providers: [
    CredentialsProvider({
      id: "credentials",
      name: "credentials",
      credentials: {
        emailAddress: {},
        password: {},
        deviceImei: {},
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

          const { accessToken, refreshToken } = res.result.data;

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
          
          const user = res2.result

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
    async jwt({ token, user }: { token: TokenSet; user?: User }) {
      if (user) {
        token = { ...token, ...user } as TokenSet;
      }
      return token;
    },

    async session({
      session,
      token,
      user,
      trigger,
    }: {
      session: Session;
      token: TokenSet;
      user: User
      trigger: string;
    }) {

      if (trigger === "update" && session?.user) {
        token = session.user as unknown as TokenSet;
      }

      if (!session.user) return session;
      else {
        session.user = token as any;
        return session;
      }
    
    },

    async signOut() {},
  },

  pages: {
    signIn: "/login",
  },
  debug: process.env.NODE_ENV === "development",
};

export default authOptions;
;