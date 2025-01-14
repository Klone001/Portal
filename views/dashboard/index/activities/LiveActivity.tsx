import React from 'react'
import ActivityList from './ActivityList'

const LiveActivity = () => {
    return (
        <div className="bg-white p-5 shadow-dashShadow rounded-lg">

            <h2 className="text-black text-base 2xl:text-lg font-medium">Live activity</h2>

            <div className="pt-5 flex flex-col gap-y-3">
                {Array.from({ length: 5 }).map((_, index) => (
                    <ActivityList key={index} />
                ))}
            </div>

        </div>
    )
}

export default LiveActivity