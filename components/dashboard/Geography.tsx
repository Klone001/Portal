import React from 'react'
import { AnalysisCard } from '../cards'
import { GeolocationChart } from './charts'

const Geography = () => {
    return (
        <AnalysisCard
            title="Geography"
            value='2 Countries'
            trend="up"
            percentage="50"
            description="Higher than last 30 days"
            lastUpdated="11:20 AM">

                <GeolocationChart />

        </AnalysisCard>
    )
}

export default Geography