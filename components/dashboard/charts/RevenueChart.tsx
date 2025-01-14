import { LineChart } from '@/components/charts'
import React from 'react'
import { lineChartOption, lineChartSeries } from '@/variables'

const RevenueChart = () => {
    return (
        <>

            <div className="h-60 2xl:h-72 w-full pb-0">
                <LineChart
                    series={lineChartSeries}
                    options={lineChartOption}
                />
            </div>

        </>
    )
}

export default RevenueChart