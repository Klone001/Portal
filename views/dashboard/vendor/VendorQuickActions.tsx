import { ArrowRightIcon } from '@heroicons/react/24/outline'
import Link from 'next/link'
import React from 'react'

const VendorQuickActions = () => {
    return (
        <div className="w-full mb-10">

            <h2 className="text-off-black text-sm font-medium mb-4">Quick Actions</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">

                <div className="w-full rounded-lg bg-primary relative px-5 pt-20 pb-4">
                    <div className="absolute inset-0 bg-no-repeat bg-cover bg-texture_one mix-blend-color-burn rounded-lg"></div>
                    <Link href="#" className="z-10 relative flex items-center content-end gap-2 w-full text-white">
                        <h2 className="text-xs">Add New Vendor</h2>
                        <ArrowRightIcon className='w-4' />
                    </Link>
                </div>

                <div className="w-full rounded-lg bg-gray-300 px-5 pt-20 pb-4 relative">
                <div className="absolute inset-0 bg-no-repeat bg-cover bg-texture_two mix-blend-plus-darker rounded-lg opacity-35"></div>
                    <Link href="#" className="z-10 relative flex items-center content-end gap-2 w-full text-black">
                        <h2 className="text-xs">Manage Pending Verifications</h2>
                        <ArrowRightIcon className='w-4' />
                    </Link>
                </div>

                <div className="w-full rounded-lg bg-gray-300 px-5 pt-20 pb-4 relative">
                <div className="absolute inset-0 bg-no-repeat bg-cover bg-texture_two mix-blend-plus-darker rounded-lg opacity-35"></div>
                    <Link href="#" className="z-10 relative flex items-center content-end gap-2 w-full text-black">
                        <h2 className="text-xs">Bulk Messaging to Vendors</h2>
                        <ArrowRightIcon className='w-4' />
                    </Link>
                </div>

            </div>

        </div>
    )
}

export default VendorQuickActions