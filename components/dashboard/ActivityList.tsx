import { CheckPlusIcon, GroupUserIcon, UserPlus } from '@/icons'
import { ActivityType } from '@/types'
import { ArrowRightIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
import React from 'react'


const ActivityList = ({ title, desc, type, timestamp }: ActivityType) => {

    let Icon
    if (type === 'registration') {
        Icon = UserPlus
    } else if (type === 'booking') {
        Icon = CheckPlusIcon
    } else {
        Icon = GroupUserIcon
    }

    return (
        <div className="bg-white border border-gray-200 p-3 2xl:p-4 rounded-lg flex flex-col gap-y-3">

            <div className="flex items-center justify-between">

                <div className="inline-flex items-center justify-center bg-gray-200 p-1.5 2xl:p-2 rounded-full">
                    <Icon className="size-5" />
                </div>

                <Link href="#" className="text-[12px] text-blue inline-flex items-center gap-x-1">
                    View
                    <ArrowRightIcon className="size-4" />
                </Link>

            </div>

            <div>
                <h2 className="text-off-black text-xs">{title}</h2>
                <p className="text-gray-700 text-[12px]">{desc}</p>
            </div>

            <h2 className="text-gray-600 text-[12px]">{timestamp}</h2>

        </div>
    )
}

export default ActivityList
