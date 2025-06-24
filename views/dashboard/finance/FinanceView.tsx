import React from 'react'
import { OverviewType } from '@/types'
import { LiveActivity, Overview } from '@/components/dashboard'
import { financeactivityData } from '@/data'
import FinaceChart from './FinaceChart'
import FinanceTransactions from './transactions/FinanceTransactions'
import { FinanceRevenue } from './revenue'

const FinanceView = () => {

    const overviewData: OverviewType[] = [
        {
            title: 'Total Revenue',
            value: 560000,
            isCurrency: true,
            trend: 'up',
            percentage: '2.15',
            description: 'Higher than last month',
            hasBorder: true,
        },
        {
            title: 'Revenue by Vendors',
            value: 60452,
            trend: 'down',
            percentage: '0.15',
            description: 'Lesser than last month',
            hasBorder: true,
        },
        {
            title: 'Revenue by Individuals',
            value: 320134,
            trend: 'up',
            percentage: '5.15',
            description: 'Higher than last month',
            hasBorder: false,
        },
    ]

    return (
        <>

            <div className="flex flex-wrap lg:flex-row -mx-4 bg-transparent mb-4 lg:mb-0">

                <div className="w-full lg:w-[70%] 2xl:w-[80%] px-4 mb-4 space-y-5  flex flex-col">

                    <Overview overviewData={overviewData} />

                    <div className="grid md:grid-cols-2 gap-3">

                        <div className="col-span-2">
                            <FinaceChart />
                        </div>

                        <FinanceTransactions />

                        <FinanceRevenue />

                    </div>

                </div>

                <div className="w-full lg:w-[30%] 2xl:w-[20%] pr-4 pl-4 lg:pl-0 space-y-5  flex flex-col">

                    <LiveActivity title='Dispute' data={financeactivityData} />

                </div>

            </div>

        </>
    )
}

export default FinanceView