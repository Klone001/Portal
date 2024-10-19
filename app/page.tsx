import { Metadata } from "next";
import { redirect } from "next/navigation";

export const metadata: Metadata = {
    title: "Dashboard",
};

export default async function page() {
    redirect("/dashboard");
    return null; 
}