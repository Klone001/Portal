import { VendorView } from "@/views";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vendor Management",
};

export default async function page() {
    return <VendorView />;
}