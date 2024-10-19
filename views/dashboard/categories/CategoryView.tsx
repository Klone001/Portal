'use client'

import { ControlBar } from '@/components';
import { AddCategory } from '@/components/modals';
import { CategoryTable } from '@/components/tables';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';

const CategoryView = () => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <>

            <div className="bg-white rounded-2xl p-5 shadow-2xl">

                <ControlBar
                    actionButton={
                        <Button onPress={() => setOpen(true)} className="bg-black rounded-lg text-[12px] text-white">Create New Category</Button>
                    } />

                <div className="pt-10">

                    <CategoryTable />

                </div>

            </div>

            <AddCategory open={open} setOpen={setOpen} />

        </>
    );
};

export default CategoryView;
