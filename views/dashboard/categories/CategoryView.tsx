'use client'

import { ControlBar } from '@/components';
import { AddCategory } from '@/components/modals';
import { TableSkeleton } from '@/components/skeleton';
import { CategoryTable } from '@/components/tables';
import { authFetch } from '@/lib/hooks';
import { ApiResponse, CategoryTypeWithId } from '@/types';
import { Button } from '@nextui-org/react';
import { useSession } from 'next-auth/react';
import React, { useEffect, useState } from 'react';

const CategoryView = () => {

    const [open, setOpen] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(true);
    const [ categories, setCategories ] = useState<CategoryTypeWithId[]>([])
    const { update } = useSession();

    async function getCategories() {
        setLoading(true);
        const response = await authFetch<ApiResponse>(`/business-category`, update, 'GET');
        setCategories(response?.result.data?.items || []);
        setLoading(false);
    }

    useEffect(() => {
        getCategories();
    }, []);

    return (
        <>

            <div className="bg-white rounded-2xl p-5 shadow-2xl">

                <ControlBar
                    onRefresh={getCategories}
                    actionButton={
                        <Button onPress={() => setOpen(true)} className="bg-black rounded-lg text-[12px] text-white">Create Business Category</Button>
                    } />

                <div className="pt-10">

                    { loading ? (
                        <TableSkeleton height={35} count={10} />
                    ) : (
                        <CategoryTable getCategories={getCategories} categories={categories} update={update} />
                    ) }

                </div>

            </div>

            <AddCategory update={update} getCategories={getCategories} open={open} setOpen={setOpen} />

        </>
    );
};

export default CategoryView;
