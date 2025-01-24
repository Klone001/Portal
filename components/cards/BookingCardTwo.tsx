import { formatCurrency } from '@/lib'
import React from 'react'

const BookingCardTwo = () => {
    return (
        <div className="border border-gray-200 p-5 rounded-xl shadow-sm">

            <div className="flex-1 w-full space-y-0.5 mb-3">

                <p className="text-xs text-gray-700">Ticket No: 6244EAG</p>

                <div className="flex items-center justify-between gap-2 flex-wrap">
                    <h3 className="text-black text-base lg:text-xl font-medium">
                        Detox loc & Retwist
                    </h3>

                    <p className="text-base lg:text-xl text-black font-medium ml-auto">
                        {formatCurrency(16000)}
                    </p>
                </div>


                <p className="text-xs text-off-black">@Twist barbing salon</p>
            </div>

            <div className="w-full space-y-0.5">

                <div className="flex items-center justify-between text-sm lg:text-base">
                    <p className="text-gray-700">Placed on</p>
                    <p className="text-black/80">15 Aug, 2024; 10:03AM</p>
                </div>

                <div className="flex items-center justify-between text-sm lg:text-base">
                    <p className="text-gray-700">Set for</p>
                    <p className="text-black/80">29 Aug, 2024; 12:30PM</p>
                </div>

            </div>

        </div>
    )
}

export default BookingCardTwo