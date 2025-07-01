import React from 'react'
import TrendIndicator from '../TrendIndicator'
import { formatCurrency } from '@/lib'
import { OverviewType } from '@/types'


const OverviewItem: React.FC<OverviewType> = ({
    title,
    value,
    isCurrency = false,
    trend,
    percentage,
    description,
    hasBorder = false,
}) => {
    return (
        <div
            className={`flex flex-col ${hasBorder ? 'border-b-2 sm:border-b-0 pb-5 sm:pb-0 sm:border-r-2 border-[#F7F7F7]' : ''
                }`}
        >
            <h5 className="text-xs text-gray-700 pb-5">{title}</h5>
            <h1 className="text-black font-semibold text-lg 2xl:text-xl tracking-tight pb-1">
                {isCurrency ? formatCurrency(value) : value.toLocaleString()}
            </h1>
            <TrendIndicator trend={trend} percentage={percentage} description={description} />
        </div>
    )
}

export default OverviewItem
