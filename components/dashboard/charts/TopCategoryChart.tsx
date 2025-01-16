import { BarChart } from '@/components/charts'
import { topCategoryOptions, topCategorySeries } from '@/variables'
import React from 'react'

const TopCategoryChart = () => {
    return (
        <>

            <div className="h-60 2xl:h-72 w-full pb-0">
                <BarChart
                    series={topCategorySeries}
                    options={topCategoryOptions}
                />
            </div>

        </>
    )
}

export default TopCategoryChart