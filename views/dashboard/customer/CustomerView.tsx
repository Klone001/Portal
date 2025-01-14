'use client'
import { ControlBar } from "@/components";
import { CustomerTable } from "@/components/tables";
import { useState } from "react";

const CustomerView = () => {

    const [selectedIds, setSelectedIds] = useState<number[]>([]);
    
    const handleSelectionChange = (ids: number[]) => {
        setSelectedIds(ids);
    };

    return (
        <>

            <div className="bg-white rounded-2xl p-5 shadow-2xl">

                <ControlBar
                    placeholder="Search by name, email, phone number"
                    buttons={['delete', 'broadcast', 'deactivate', 'export']}
                    isDisabled={selectedIds.length == 0}
                // actionButton={
                //     <Button className="bg-secondary-200 rounded-lg text-[12px] text-black px-6">
                //         Create User
                //     </Button>
                // }
                />

                <div className="pt-10">

                    <CustomerTable onSelectionChange={handleSelectionChange} />

                </div>

            </div>

        </>
    );
};

export default CustomerView;
