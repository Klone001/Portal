import { CustomerDetails } from "@/views";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Customer Management",
};

export default async function page({
    params,
}: {
    params: Promise<{ id: number }>
}) {
    return <CustomerDetails userId={(await params).id} />;
}