import React from 'react'
import ActivityList from './ActivityList'
import { ActivityType } from '@/types'

type LiveActivityProps = {
    title: string
    data: ActivityType[]
    className?: string
}

const LiveActivity: React.FC<LiveActivityProps> = ({ title, data, className = '' }) => {
    return (
        <div className={`bg-white p-3 2xl:p-4 shadow-dashShadow rounded-lg ${className}`}>

            <h2 className="text-black text-base font-medium">{title}</h2>

            <div className="pt-5 flex flex-col gap-y-3">
                {data.map((item, index) => (
                    <ActivityList key={index} {...item} />
                ))}

            </div>

        </div>
    )
}

export default LiveActivity
