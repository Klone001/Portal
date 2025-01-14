import { SearchInsightIcon } from '@/icons'
import { EnvelopeIcon } from '@heroicons/react/24/outline'
import { Button } from '@nextui-org/react'
import React from 'react'

const AccountInsight = () => {
    return (
        <div className="bg-white rounded-lg p-5 shadow-dashShadow">

            <div className="flex items-center justify-between">

                <div className="flex flex-col gap-y-2 text-center m-auto justify-center items-center">

                    <Button isIconOnly className='bg-gray-100' size='lg' radius='full'>
                        <EnvelopeIcon className='text-primary w-6' />
                    </Button>

                    <p className='text-black text-xs md:text-sm'>Mail</p>

                </div>

                <div className="flex flex-col gap-y-2 text-center m-auto justify-center items-center">

                    <Button isIconOnly className='bg-gray-100' size='lg' radius='full'>
                        <SearchInsightIcon className='text-primary w-6' />
                    </Button>

                    <p className='text-black text-xs md:text-sm'>User Insight</p>

                </div>

            </div>

        </div>
    )
}

export default AccountInsight