import { BarChart } from '@/components/charts'
import { financeBarChartOptions } from '@/variables'
import React from 'react'

const FinaceChart = () => {

    const data = [
        {
            name: "Finance",
            data: [70, 50, 90, 60, 65, 75, 75, 80, 60, 55, 85, 95],
            color: "#000",
        }
    ];

    return (
        <div className="p-5 bg-white border border-gray-80 rounded-lg">

            <div className="h-80 2xl:h-96">
                <BarChart
                    series={data}
                    options={financeBarChartOptions}
                />
            </div>

        </div>
    )
}

export default FinaceChart