'use client'
import { ControlBar } from "@/components";
import { VendorsTable } from "@/components/tables";
import { useState } from "react";
import VendorQuickActions from "./VendorQuickActions";

const CustomerView = () => {

    const [selectedIds, setSelectedIds] = useState<number[]>([]);

    const handleSelectionChange = (ids: number[]) => {
        setSelectedIds(ids);
    };

    return (
        <>

            <div className="bg-white rounded-2xl p-5 shadow-2xl">

                <VendorQuickActions />

                <ControlBar placeholder="Search by name, email, phone number"
                    buttons={['delete', 'broadcast', 'deactivate', 'export']}
                    isDisabled={selectedIds.length == 0}
                />

                <div className="pt-10">

                    <VendorsTable onSelectionChange={handleSelectionChange} />

                </div>

            </div>

        </>
    );
};

export default CustomerView;
