import { CategoryView } from "@/views";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Category",
};

export default async function page() {
    return  <CategoryView />
}