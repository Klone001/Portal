import { formatCurrency } from '@/lib'
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid'
import { Button, Chip } from '@nextui-org/react'
import React from 'react'

const BookingCard = () => {

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
        <div className="w-full min-w-[320px] p-3 rounded-lg bg-white shadow-[0px_0px_2px_0px_rgba(0,0,0,0.12)] border">

            <div className="flex items-start justify-between">

                <div className="flex-1 w-[95%]">
                    <p className="text-xs text-gray-700">Ticket No: 6244EAG</p>
                    <h3 className="text-black text-base font-medium">Detox loc & Retwist</h3>
                    <p className="text-xs text-off-black">@Twist barbing salon</p>
                </div>

                <div className="justify-end flex">
                    <Button radius='full' variant='light' isIconOnly size='sm'>
                        <EllipsisVerticalIcon className='w-5' />
                    </Button>
                </div>

            </div>

            <div className="pt-3 pb-6">

                <div className="flex items-center justify-between gap-5">

                    <p className="text-xs text-gray-800 leading-tight">Placed on</p>
                    <h2 className="text-off-black text-xs ">15 Aug, 2024; 10:03AM</h2>

                </div>

                <div className="flex items-center justify-between gap-5">

                    <p className="text-xs text-gray-800 leading-tight">Set for</p>
                    <h2 className="text-off-black text-xs ">29 Aug, 2024; 12:30PM</h2>

                </div>

            </div>

            <div className="flex items-center justify-between gap-4">

                <p className="text-base lg:text-lg text-black font-medium">
                    {formatCurrency(1200)}
                </p>

                <Chip size='sm' className={`px-3 py-4 text-xs ${getStatusStyles('Upcoming').bgColor} ${getStatusStyles('Upcoming').textColor} `}> Upcoming </Chip>

            </div>

        </div>
    )
}

export default BookingCard