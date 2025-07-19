import React from 'react'

const SelectionCardSkeleton = () => {
    return (
        <div className="rounded-lg p-4 border border-gray-300 animate-pulse">

            <div className="h-5 w-16 mb-2 ml-auto bg-gray-300 rounded-full" />

            <div className="opacity-50">

                <div className="w-6 h-6 bg-gray-400 rounded-full mb-2" />

                <div className="h-4 bg-gray-400 rounded w-3/4 mt-2" />

            </div>

        </div>
    )
}

export default SelectionCardSkeleton