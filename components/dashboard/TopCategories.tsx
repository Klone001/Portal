import React from 'react'
import { AnalysisCard } from '../cards'
import { TopCategoryChart } from './charts'

const TopCategories = () => {
    return (
        <AnalysisCard
            title="Top categories"
            value='4 Categories'
            lastUpdated="11:20 AM">

                <TopCategoryChart />

        </AnalysisCard>
    )
}

export default TopCategories