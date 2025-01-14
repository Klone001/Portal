import React, { ReactNode } from "react";
import TrendIndicator from "../TrendIndicator";

interface AnalysisCardProps {
    title: string;
    value: number | string;
    trend?: "up" | "down";
    percentage?: string;
    description?: string;
    lastUpdated?: string;
    formatValue?: (value: number | string) => string;
    children?: ReactNode;
}

const AnalysisCard: React.FC<AnalysisCardProps> = ({
    title,
    value,
    trend,
    percentage,
    description,
    lastUpdated,
    formatValue,
    children,
}) => {
    return (
        <div className="p-5 bg-white border border-gray-80 rounded-lg">

            <div className="border-b border-gray-80 pb-3">

                <h5 className="text-sm 2xl:text=base text-black pb-2">{title}</h5>

                <h1 className="text-black font-semibold text-xl 2xl:text-2xl tracking-tight pb-1">
                    {formatValue ? formatValue(value) : value}
                </h1>

                {trend && percentage && description && (
                    <TrendIndicator trend={trend} percentage={percentage} description={description} />
                )}

            </div>

            <div className="w-full py-4">
                {children}
            </div>

            {lastUpdated && <p className="text-xs text-gray-600">Last updated at {lastUpdated}</p>}

        </div>
    );
};

export default AnalysisCard;
