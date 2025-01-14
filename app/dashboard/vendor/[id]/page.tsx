import { VendorDetailsView } from "@/views";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Vendor Management",
};

export default async function page({
    params,
}: {
    params: Promise<{ id: number }>
}) {
    return <VendorDetailsView vendorId={(await params).id} />;
}