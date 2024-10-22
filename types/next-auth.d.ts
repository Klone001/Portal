import NextAuth from "next-auth/next";
import { User } from "./User";

declare module "next-auth" {
  interface Session {
    user: User;
  }
}
