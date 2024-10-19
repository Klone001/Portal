import { authOptions } from "@/lib";
import { LoginView } from "@/views";
import { Metadata } from "next";
import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Sign In",
};

export default async function page() {

    const session = await getServerSession(authOptions);
    if (session) redirect("/dashboard");

    return <LoginView />;
}