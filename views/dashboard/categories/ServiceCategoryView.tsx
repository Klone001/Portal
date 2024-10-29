'use client'

import { ControlBar } from '@/components';
import { AddService } from '@/components/modals';
import { TableSkeleton } from '@/components/skeleton';
import { ServiceCategoryTable } from '@/components/tables';
import { authFetch } from '@/lib/hooks';
import { ApiResponse, CategoryTypeWithId } from '@/types';
import { Button } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const ServiceCategoryView = ({ categoryId }: { categoryId: number }) => {

    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true);
    const [services, setServices] = useState<CategoryTypeWithId[]>([])
    const { update } = useSession();

    async function getServices() {
        setLoading(true);
        const response = await authFetch<ApiResponse>(`/service-category/service?BusinessCategoryIds=${categoryId}`, update);
        setServices(response?.result.items || []);
        setLoading(false);
    }

    useEffect(() => {
        getServices();
    }, []);

    return (
        <>

            <div className="bg-white rounded-2xl p-5 shadow-2xl">

                <ControlBar onRefresh={getServices}
                    actionButton={
                        <Button onPress={() => setOpen(true)} className="bg-black rounded-lg text-[12px] text-white">Create New Service Category</Button>
                    } />

                <div className="pt-10">

                    {loading ? (
                        <TableSkeleton height={35} count={10} />
                    ) : (
                        <ServiceCategoryTable update={update} getServices={getServices} services={services} categoryId={categoryId} />
                    )}

                </div>

            </div>

            <AddService update={update} getServices={getServices} categoryId={categoryId} open={open} setOpen={setOpen} />

        </>
    );
};

export default ServiceCategoryView;
