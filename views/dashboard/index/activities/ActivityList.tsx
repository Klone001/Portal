import { CheckCircleIcon } from '@heroicons/react/24/outline'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'

const ActivityList = () => {
    return (
        <div className="bg-white border border-gray-200 p-4 rounded-lg flex flex-col gap-y-4">

            <div className="flex items-center justify-between">

                <div className="inline-flex items-center justify-center bg-gray-200 p-1.5 2xl:p-2 rounded-full">
                    <CheckCircleIcon className='size-6' />
                </div>

                <Link href='#' className='text-[12px] 2xl:text-xs text-blue inline-flex items-center gap-x-1'>
                    View
                    <ArrowRightIcon className='size-4' />
                </Link>

            </div>

            <div className="">
                <h2 className="text-off-black text-sm">New User Registered New User Registered </h2>
                <p className="text-gray-700 text-[12px] 2xl:text-xs">olutoyeaboaba@gmail.com</p>
            </div>

            <h2 className="text-gray-600 text-[12px] 2xl:text-sm">Today 06:06 AM</h2>

        </div >
    )
}

export default ActivityList