import { authFetch } from "@/actions";
import { CategoryView } from "@/views";
import { Metadata } from "next";
import { Suspense } from "react";

export const metadata: Metadata = {
    title: "Category",
};

export default async function page() {
    const category = await authFetch<{ category: [] }>("/business-category/business");
    return (
        <Suspense fallback='Loading.......'>
            <CategoryView />
        </Suspense>
    );
}