'use client'

import { ControlBar } from '@/components';
import { AddService } from '@/components/modals';
import { ServiceCategoryTable } from '@/components/tables';
import { Button } from '@nextui-org/react';
import React, { useState } from 'react';

const ServiceCategoryView = ({ categoryId } : { categoryId: number }) => {

    const [open, setOpen] = useState<boolean>(false)

    return (
        <>

            <div className="bg-white rounded-2xl p-5 shadow-2xl">

                <ControlBar
                    actionButton={
                        <Button onPress={() => setOpen(true)} className="bg-black rounded-lg text-[12px] text-white">Create New Service Category</Button>
                    } />

                <div className="pt-10">

                    <ServiceCategoryTable categoryId={categoryId} />

                </div>

            </div>

            <AddService categoryId={categoryId} open={open} setOpen={setOpen} />

        </>
    );
};

export default ServiceCategoryView;
