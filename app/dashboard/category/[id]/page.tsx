import { ServiceCategoryView } from "@/views";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Category",
};

export default async function page({ params }: { params: { id: number } }) {
    return <ServiceCategoryView categoryId ={params.id} />;
}