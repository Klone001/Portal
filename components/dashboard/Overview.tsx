import { formatCurrency } from '@/lib'
import React from 'react'
import TrendIndicator from '../TrendIndicator'

const Overview = () => {
  return (
    <div className="p-5 bg-white w-full rounded-lg">

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">

        <div className="flex flex-col border-b-2 sm:border-b-0 pb-5 sm:pb-0 sm:border-r-2 border-[#F7F7F7]">

          <h5 className='text-xs text-gray-700 pb-5'>Total Sales</h5>

          <h1 className='text-black font-semibold text-lg 2xl:text-xl tracking-tight pb-1'> {formatCurrency(560000)} </h1>

          <TrendIndicator trend="up" percentage="2.15" description="Higher than last month" />

        </div>

        <div className="flex flex-col border-b-2 sm:border-b-0 pb-5 sm:pb-0 sm:border-r-2 border-[#F7F7F7]">

          <h5 className='text-xs text-gray-700 pb-5'>Total Vendors</h5>

          <h1 className='text-black font-semibold text-lg 2xl:text-xl tracking-tight pb-1'> 60,452 </h1>

          <TrendIndicator trend="down" percentage="0.15" description="Lesser than last month" />

        </div>

        <div className="flex flex-col">

          <h5 className='text-xs text-gray-700 pb-5'>Total Books</h5>

          <h1 className='text-black font-semibold text-lg 2xl:text-xl tracking-tight pb-1'> 320,134 </h1>

          <TrendIndicator trend="up" percentage="5.15" description="Higher than last month" />

        </div>

      </div>

    </div>
  )
}

export default Overview