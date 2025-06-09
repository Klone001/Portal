'use client'

import { ArrowRightIcon } from '@heroicons/react/24/solid'
import React, { useState } from 'react'
import FinanceTransactionList from './FinanceTransactionList'
import { financeTrxData } from '@/data'
import FinanceTransactionsDrawer from './FinanceTransactionsDrawer'

const FinanceTransactions = () => {

    const [ open, setOpen ] = useState(false)
    
    return (
        <>

        <div className="p-5 bg-white border border-gray-80 rounded-lg">

            <div className="flex items-center gap-3 justify-between pb-5">

                <h5 className="text-sm 2xl:text-base text-black pb-2"> Transactions </h5>

                <a onClick={() => setOpen(true)} href="javascript:void(0)" className="text-[12px] text-blue inline-flex items-center gap-x-1">
                    View
                    <ArrowRightIcon className="size-4" />
                </a>

            </div>

            <div className="divide-y divide-gray-400">

                {financeTrxData.slice(0, 4).map((item, index) => (
                    <FinanceTransactionList key={index} trx={item} />
                ))}

            </div>

        </div>

        <FinanceTransactionsDrawer open={open} setOpen={setOpen} />

        </>
    )
}

export default FinanceTransactions