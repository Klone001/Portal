import React from 'react'
import BookingList from './BookingList'

const VendorBookingsLayout = () => {
    return (
        <div className="bg-white rounded-lg p-5 shadow-dashShadow h-full">

            <div className="flex items-center justify-between mb-5">

                <h2 className="text-black text-base 2xl:text-lg font-medium">Bookings</h2>

                <button className='text-xs text-blue underline underline-offset-2 !p-0'>View All</button>

            </div>

            <div className="grid grid-cols-2 lg:grid-cols-1 2xl:grid-cols-2 gap-3">

                <BookingList />

                <BookingList />

                <BookingList />

                <BookingList />

            </div>

        </div>
    )
}

export default VendorBookingsLayout