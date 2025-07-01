import { LineChart } from '@/components/charts'
import { Button } from '@/components/ui'
import { formatCurrency } from '@/lib'
import { lineChartOption, financeLineChartSeries } from '@/variables'
import { Progress } from '@nextui-org/react'
import React from 'react'

const FinanceRevenue = () => {

    return (
        <div className="p-5 bg-white border border-gray-80 rounded-lg space-y-2">

            <h1 className="text-black font-semibold text-xl 2xl:text-2xl tracking-tight">
                {formatCurrency('109432.90')}
            </h1>

            <div className="flex items-center gap-2 justify-between pb-1 text-gray-700 text-sm">

                <span>1,234 Businesses</span>

                <span>1,234 Individuals</span>

            </div>

            <Progress classNames={{
                track: 'bg-black',
                indicator: 'bg-success'
            }} value={60} />

            <div className="h-60 2xl:h-72 w-full pt-5">
                <LineChart
                    series={financeLineChartSeries}
                    options={lineChartOption}
                />
            </div>

            <div className="space-y-4 pt-4">

                <p className='text-xs text-gray-800'>You’ve made a profit of <span className='text-black font-semibold'> N230,000</span> with the total revenue at
                    <span className='text-black font-semibold'> N560,000</span> in the past month! Share this feat?</p>

                <Button className='rounded-full bg-black py-6 w-full'>Share</Button>

            </div>

        </div>
    )
}

export default FinanceRevenue