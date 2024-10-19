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

          const { data } = res.result;
          const { accessToken, refreshToken, ...user } = data;

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
        // Ensure user is being cast correctly
        token = { ...token, ...user } as TokenSet;
      }
      return token;
    },

    async session({
      session,
      token,
      trigger,
    }: {
      session: Session;
      token: TokenSet;
      trigger: string;
    }) {

      if (trigger === "update" && session?.user) {
        token = session.user as unknown as TokenSet;
      }

      session.user = { ...session.user, ...token } as User;
      return session;
      
    },

    async signOut() {},
  },

  pages: {
    signIn: "/login",
  },
  debug: process.env.NODE_ENV === "development",
};

export default authOptions;
