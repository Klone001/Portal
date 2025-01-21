'use client'
import { Button, PopupModal } from '@/components/ui'
import { XMarkIcon } from '@heroicons/react/24/solid';
import SearchInput from '../SearchInput';
import FilterButton from '../FilterButton';
import { useState } from 'react';
import { BookingTab } from '../bookings';
import { BookingCardTwo } from '../cards';

const CustomerBookingsModal: React.FC<{ open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ open, setOpen }) => {

    const tabs = [
        { value: 'upcoming', label: 'Upcoming' },
        { value: 'cancelled', label: 'Cancelled' },
        { value: 'completed', label: 'Completed' }
    ];

    const [activeTab, setActiveTab] = useState<string>(tabs[0].value);

    const handleTabClick = (value: string) => {
        console.log(value);

        setActiveTab(value);
    }

    return (
        <PopupModal
            size='7xl'
            isOpen={open}
            onClose={() => setOpen(false)}
            placement='center'
            backdrops='opaque'
            showCloseButton={false}
            className='max-h-[95vh] py-3'>

            <div className="flex items-center justify-between flex-wrap gap-3 mb-5">

                <div className="flex items-center gap-x-3">

                    <Button onPress={() => setOpen(false)} isIconOnly className='bg-gray-200' size='sm' radius='full'>
                        <XMarkIcon className='size-5 text-black' />
                    </Button>

                    <h2 className="text-black text-sm md:text-base font-medium">Booking History</h2>

                </div>

                <div className='flex items-center gap-2 justify-end w-full sm:w-auto order-1 md:order-2'>

                    <SearchInput placeholder='Search by date, store, ticket number' />

                    <FilterButton />

                </div>

            </div>

            <BookingTab tabs={tabs} activeTab={activeTab} onTabClick={handleTabClick} />

            <div className="flex flex-col gap-y-5 mt-5">

                <BookingCardTwo />

                <BookingCardTwo />

                <BookingCardTwo />

                <BookingCardTwo />

                <BookingCardTwo />

            </div>

        </PopupModal>
    )
}

export default CustomerBookingsModal