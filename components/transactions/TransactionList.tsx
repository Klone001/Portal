import { formatCurrency } from '@/lib'
import React from 'react'

const TransactionList = ({ type = 'credit' } : { type?: string }) => {
    return ( 
        <div className="w-full pt-3">

            <div className="flex items-center justify-between gap-3">
                <h2 className="text-xs lg:text-sm text-off-black">Withdrawal</h2>
                <p className={`${type === 'debit' ? 'text-error-400' : 'text-success-400'} text-xs`}> { type === 'debit' && '-' } { formatCurrency(35000) } </p>
            </div>

            <div className="flex items-center justify-between gap-3">
                <h2 className="text-[11px] text-gray-700">Jan 11</h2>
                <p className='text-gray-700 text-[11px]'> { formatCurrency('2325.05') } </p>
            </div>

        </div>
    )
}

export default TransactionList