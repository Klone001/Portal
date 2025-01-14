import { BarChart } from '@/components/charts'
import { barCharSeries, barChartOptions } from '@/variables'
import React from 'react'

const UsersChart = () => {
    return (
        <>

            <div className="h-60 2xl:h-72 w-full pb-0">
                <BarChart
                    series={barCharSeries}
                    options={barChartOptions}
                />
            </div>

        </>
    )
}

export default UsersChart