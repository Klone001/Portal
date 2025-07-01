import { FinanceView } from "@/views";
import { Metadata } from "next";

export const metadata: Metadata = {
    title: "Finance Hub",
};

export default async function page() {
    return <FinanceView />;
}