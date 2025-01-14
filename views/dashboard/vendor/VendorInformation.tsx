'use client'

import React, { useState } from 'react'
import { Chip, Image } from '@nextui-org/react';
import { LockResetIcon } from '@/icons';
import { ImageUploader } from '@/components';
import { Button } from '@/components/ui';
import { LockClosedIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';

const VendorInformation = () => {

    const [isEdit, setEdit] = useState<boolean>(false)
    const [loading, setLoading] = useState<boolean>(false)

    const [formData, setFormData] = useState({
        logo: null,
        banner: null,
        BusinessName: 'Kems Store',
        services: '',
    });

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {

        const { name, value } = e.target
        setFormData(prevData => ({
            ...prevData,
            [name]: value
        }))
    }

    const handleFileChange = (file: any) => {
        setFormData(prevData => ({
            ...prevData,
            logo: file
        }))
    };

    const handleBannerChange = (file: any) => {
        setFormData(prevData => ({
            ...prevData,
            banner: file
        }))
    };

    const handleSubmit = (e: React.MouseEvent) => {
        e.preventDefault()
        setLoading(true)
        setTimeout(() => {
            setEdit(false)
            setLoading(false)
        }, 1000)
    }

    return (
        <div className="bg-white rounded-lg p-5 shadow-dashShadow">

            <div className="flex items-center justify-between mb-5">

                <h2 className="text-black text-base 2xl:text-lg font-medium">User Information</h2>

                {isEdit ? (
                    <Button isLoading={loading} onClick={handleSubmit} size='sm' className='bg-primary text-white !text-[12px] rounded-lg h-9 !px-1'> Done </Button>
                ) : (
                    <button onClick={() => setEdit(true)} className='text-xs text-blue underline underline-offset-2 !p-0'>Edit</button>
                )}

            </div>

            <div className="flex flex-col divide-y">

                <div className="py-4 flex  flex-wrap justify-between items-center gap-5">

                    <h2 className="text-off-black text-sm font-medium leading-tight">
                        Business Logo and Banner
                    </h2>

                    <div className="flex gap-y-3 gap-x-4">

                        {isEdit ? (
                            <>

                                <ImageUploader defaultImage="https://randomuser.me/api/portraits/men/1.jpg"
                                    className="size-16" onFileChange={handleFileChange} />

                                <ImageUploader defaultImage="https://randomuser.me/api/portraits/men/1.jpg"
                                    className="h-16 w-52 sm:w-72 rounded-lg" onFileChange={handleBannerChange} />

                            </>
                        ) : (
                            <>
                                <Image radius='full' alt='Reset' width={200} className="rounded-full object-cover size-16" src='https://randomuser.me/api/portraits/men/1.jpg' />

                                <Image alt='Reset' width={500} className="rounded-lg object-cover h-16 w-72" src='https://randomuser.me/api/portraits/men/1.jpg' />
                            </>
                        )}

                    </div>

                </div>

                <div className="py-4 flex justify-between items-center gap-5">
                    <h2 className="text-off-black text-sm font-medium leading-tight">Business Name</h2>
                    {isEdit ? (
                        <input value={formData.BusinessName} onChange={handleInputChange} name='BusinessName' type='text' className='!border-none !outline-none !shadow-none !ring-0 !ring-opacity-0 text-xs text-gray-800 text-right !py-0' required />
                    ) : (
                        <p className="text-xs text-gray-800 text-left"> Kems Store  </p>
                    )}
                </div>

                <div className="py-4 flex justify-between items-center gap-5">
                    <h2 className="text-off-black text-sm font-medium leading-tight">Contact Info</h2>

                    <div className="flex items-center gap-x-2">

                        <LockClosedIcon className='w-4 mb-0.5' />

                        <p className="text-xs text-gray-800 text-left"> Kemi Esther  </p>

                        <Link href={`/customer/1`}>
                            <Button size='sm' className="bg-accent-200 text-black !text-[11px] h-6 px-3 rounded">
                                View Profile
                            </Button>
                        </Link>

                    </div>

                </div>

                <div className="py-4 flex justify-between items-center gap-5">
                    <h2 className="text-off-black text-sm font-medium leading-tight">Services Offered</h2>
                    <div className="flex items-center gap-x-2">
                        <Chip size='sm' className='bg-gray-200 px-2 py-4'>Male Salon</Chip>
                        <Chip size='sm' className='bg-gray-200 px-2 py-4'>Female Salon</Chip>
                        <Chip size='sm' className='bg-gray-200 px-2 py-4'> Spa </Chip>
                    </div>
                </div>

                <div className="py-4 flex justify-between items-center gap-5">
                    <h2 className="text-off-black text-sm font-medium leading-tight">Date Joined</h2>
                    <p className="text-xs text-gray-800 text-left">25 Aug, 2024</p>
                </div>

                <div className="py-4 flex justify-between items-center gap-5 flex-wrap">
                    <h2 className="text-off-black text-sm font-medium leading-tight">Password</h2>

                    <div className="flex flex-col">
                        <p className="text-xs text-gray-800 text-left -mt-1">********</p>
                        <p className="text-xs text-gray-800 text-left">
                            Last change: 25 Aug, 2024; 11:12PM
                        </p>
                    </div>

                    <Button size='sm' className="bg-accent-200 text-black inline-flex gap-x-2 text-xs">
                        <LockResetIcon className='size-4' /> <span className="pt-1">Reset password</span>
                    </Button>

                </div>

            </div>

        </div>
    )
}

export default VendorInformation
