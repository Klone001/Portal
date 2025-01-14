import { Chip, User } from '@nextui-org/react';
import React from 'react'

const BookingList = () => {

    const getStatusStyles = (status: string) => {
        let textColor: string;
        let bgColor: string;

        switch (status) {
            case "Upcoming":
                textColor = "text-white";
                bgColor = "bg-primary";
                break;
            case "Pending":
                textColor = "text-white";
                bgColor = "bg-secondary-500";
                break;
            default:
                textColor = "text-gray-900";
                bgColor = "bg-gray-300";
                break;
        }
        return { textColor, bgColor };
    };

    return (
        <div className="p-3 pb-0 border border-gray-200 rounded">

            <Chip size='sm' className={`px-1 py-2 mb-1.5 text-[10px] rounded uppercase ${getStatusStyles('Upcoming').bgColor} ${getStatusStyles('Upcoming').textColor} `}> Upcoming </Chip>

            <div className="w-full -space-y-1 pb-5 2xl:pb-8">
                <h3 className="text-black text-[15px] lg:text-base font-medium">Detox loc & Retwist</h3>
                <p className="text-[12px] text-gray-800">15 Aug, 2024</p>
                <p className="text-[12px] text-gray-800">10:03 AM - 12:00 PM</p>
            </div>

            <User
                className='text-[11px] text-off-black' 
                avatarProps={{
                    src: "https://i.pravatar.cc/150?u=a04258114e29026702d",
                    className: 'w-7 h-7'
                }}
                name="Gift Jonathan"
            />

        </div>
    )
}

export default BookingList