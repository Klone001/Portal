import { CustomerView } from "@/views";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Customer Management",
};

export default async function page() {
    return <CustomerView />;
}