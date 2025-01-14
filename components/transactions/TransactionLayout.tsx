'use client'

import React, { useState } from 'react'
import TransactionList from './TransactionList'
import { TransactionModal } from '../modals'

const TransactionLayout = () => {

    const [ open, setOpen ] = useState<boolean>(false)

    return (
        <>

        <div className="bg-white rounded-lg p-5 shadow-dashShadow h-full">

            <div className="flex items-center justify-between mb-5">

                <h2 className="text-black text-base 2xl:text-lg font-medium">Transactions</h2>

                <button onClick={() => setOpen(true)} className='text-xs text-blue underline underline-offset-2 !p-0'>View All</button>

            </div>

            <div className="space-y-1 divide-y-1 divider-gray-300">

                <TransactionList type='debit' />

                <TransactionList />

                <TransactionList />

                <TransactionList type='debit' />

                <TransactionList />

                <TransactionList />

            </div>

        </div>

        <TransactionModal open={open} setOpen={setOpen} />

        </>
    )
}

export default TransactionLayout