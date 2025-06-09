import React from 'react'
import ActivityList from './ActivityList'
import { activityData } from '@/data'

const LiveActivity = () => {
    return (
        <div className="bg-white p-3 2xl:p-4 shadow-dashShadow rounded-lg">

            <h2 className="text-black text-base font-medium">Live activity</h2>

            <div className="pt-5 flex flex-col gap-y-3">
                { activityData.map((item, index) => (
                    <ActivityList activity={item} key={index} />
                ))}
            </div>

        </div>
    )
}

export default LiveActivity