import { formatCurrency } from '@/lib'
import React from 'react'
import { AnalysisCard } from '../cards'
import { RevenueChart } from './charts'

const TotalRevenue = () => {
    return (
        <AnalysisCard
            title="Total Sales"
            value={450000}
            trend="up"
            percentage="2.15"
            description="Higher than last month"
            lastUpdated="11:20 AM"
            formatValue={formatCurrency}>

                <RevenueChart />

        </AnalysisCard>
    )
}

export default TotalRevenue