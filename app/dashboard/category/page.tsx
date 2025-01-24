import { CategoryView } from "@/views";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Category",
};

export default async function page() {
    return  <CategoryView />
}