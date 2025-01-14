'use client'

import { Button } from '@nextui-org/react'
import React from 'react'
import { ArrowLeftIcon, ArrowRightIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';
import { useSlider } from '@/utils';
import { BookingCard } from '@/components/cards';

const BookingsLayout = () => {

    const {
        sliderRef,
        startDrag,
        stopDrag,
        handleDrag,
        scrollTo
    } = useSlider();

    return (
        <div className="bg-white rounded-lg p-5 shadow-dashShadow">

            <div className="flex items-center justify-between mb-5">

                <h2 className="text-black text-base 2xl:text-lg font-medium">Bookings</h2>

                <div className="flex items-center gap-x-5">

                    <Button onPress={() => scrollTo('left')} isIconOnly radius='full' variant='light'>
                        <ArrowLeftIcon className='h-4 w-4' />
                    </Button>

                    <Button onPress={() => scrollTo('right')} isIconOnly radius='full' variant='light'>
                        <ArrowRightIcon className='h-4 w-4' />
                    </Button>

                </div>

            </div>

            <div className="flex items-center gap-x-3 overflow-x-scroll scrollbar-hide cursor-grab transition-all duration-500 rounded-xl select-none scroll-smooth"
                ref={sliderRef}
                onMouseDown={startDrag}
                onMouseUp={stopDrag}
                onMouseLeave={stopDrag}
                onMouseMove={handleDrag}
                onTouchStart={startDrag}
                onTouchEnd={stopDrag}
                onTouchMove={handleDrag}>

                    <BookingCard />

                    <BookingCard />

                    <BookingCard />

                    <BookingCard />

            </div>

            <div className="mt-5 m-auto text-center">
                <Link href='#' className='text-blue underline underline-offset-1 text-sm'>
                    View History
                </Link>
            </div>

        </div>
    )
}

export default BookingsLayout