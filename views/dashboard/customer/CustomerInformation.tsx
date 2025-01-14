'use client'

import React, { useState } from 'react'
import { Image } from '@nextui-org/react';
import { LockResetIcon } from '@/icons';
import { ImageUploader } from '@/components';
import { Button } from '@/components/ui';
import { truncate } from 'node:fs';

const CustomerInformation = () => {

    const [isEdit, setEdit] = useState<boolean>(false)
    const [ loading, setLoading ] = useState<boolean>(false)

    const [formData, setFormData] = useState({
        image: null,
        firstName: 'Abigail',
        lastName: 'Babalola',
        phone: '+2349069221772',
        email: 'abbybabs@gmail.com',
        location: 'Nigeria'
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
            image: file
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

                <div className="py-4 flex justify-between items-center gap-5">
                    <h2 className="text-off-black text-sm font-medium leading-tight">Profile picture</h2>
                    {isEdit ? (
                        <ImageUploader defaultImage="https://randomuser.me/api/portraits/men/1.jpg"
                            className="size-16" onFileChange={handleFileChange} />
                    ) : (
                        <Image radius='full' alt='Reset' width={200} className="rounded-full object-cover size-16" src='https://randomuser.me/api/portraits/men/1.jpg' />
                    )}
                </div>


                <div className="py-4 flex justify-between items-center gap-5">
                    <h2 className="text-off-black text-sm font-medium leading-tight">First name</h2>
                    {isEdit ? (
                        <input value={formData.firstName} onChange={handleInputChange} name='firstName' type='text' className='!border-none !outline-none !shadow-none !ring-0 !ring-opacity-0 text-xs text-gray-800 text-right !py-0' required />
                    ) : (
                        <p className="text-xs text-gray-800 text-left"> Abigail  </p>
                    )}
                </div>

                <div className="py-4 flex justify-between items-center gap-5">
                    <h2 className="text-off-black text-sm font-medium leading-tight">Last name</h2>
                    {isEdit ? (
                        <input value={formData.lastName} onChange={handleInputChange} name='lastName' type='text' className='!border-none !outline-none !shadow-none !ring-0 !ring-opacity-0 text-xs text-gray-800 text-right !py-0' required />
                    ) : (
                        <p className="text-xs text-gray-800 text-left"> Babalola </p>
                    )}
                </div>

                <div className="py-4 flex justify-between items-center gap-5">
                    <h2 className="text-off-black text-sm font-medium leading-tight">Mobile number</h2>
                    {isEdit ? (
                        <input value={formData.phone} onChange={handleInputChange} name='phone' type='tel' className='!border-none !outline-none !shadow-none !ring-0 !ring-opacity-0 text-xs text-gray-800 text-right !py-0' required />
                    ) : (
                        <p className="text-xs text-gray-800 text-left"> +2349069221772 </p>
                    )}
                </div>

                <div className="py-4 flex justify-between items-center gap-5">
                    <h2 className="text-off-black text-sm font-medium leading-tight">Email</h2>
                    {isEdit ? (
                        <input value={formData.email} name='email' onChange={handleInputChange} type='email' className='!border-none !outline-none !shadow-none !ring-0 !ring-opacity-0 text-xs text-gray-800 text-right !py-0' required />
                    ) : (
                        <p className="text-xs text-gray-800 text-left">abbybabs@gmail.com</p>
                    )}
                </div>

                <div className="py-4 flex justify-between items-center gap-5">
                    <h2 className="text-off-black text-sm font-medium leading-tight">Location</h2>
                    {isEdit ? (
                        <input value={formData.location} onChange={handleInputChange} name='location' type='text' className='!border-none !outline-none !shadow-none !ring-0 !ring-opacity-0 text-xs text-gray-800 text-right !py-0' required />
                    ) : (
                        <p className="text-xs text-gray-800 text-left">Nigeria</p>
                    )}
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

export default CustomerInformation
