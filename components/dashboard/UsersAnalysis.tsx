import React from 'react'
import { AnalysisCard } from '../cards'
import { UsersChart } from './charts'

const UsersAnalysis = () => {
    return (
        <AnalysisCard
            title="New vs Returning Users"
            value='+1,432'
            trend="up"
            percentage="1.15"
            description="Higher than last 30 days"
            lastUpdated="11:20 AM">

                <UsersChart />

        </AnalysisCard>
    )
}

export default UsersAnalysis