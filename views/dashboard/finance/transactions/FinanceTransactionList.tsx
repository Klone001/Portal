import { FinanceTrxType } from '@/types'
import { Image } from '@nextui-org/react'
import React from 'react'

const FinanceTransactionList = ({ trx } : { trx: FinanceTrxType }) => {

    const { user, vendor, desc, date } = trx || {}

    return (
        <div className="py-4">

            <div className="flex items-start gap-2">

                <div className="flex">
                    <Image src={user.image} alt={user.name} width={38} className='rounded-full w-20' />
                    <Image src={vendor.image} alt={vendor.name} width={28} className='rounded-full w-16 -ml-2' />
                </div>

                <div className="space-y-3">

                    <p className='text-gray-700 text-xs'>
                        <span className="text-black font-medium">@{ user.name }</span>{' '}
                        <span> { desc } </span>{' '}
                        <span className="text-black font-medium">{vendor.name}</span>
                    </p>

                    <span className='text-[12px] text-gray-600'> { date } </span>

                </div>

            </div>

        </div>
    )
}

export default FinanceTransactionList