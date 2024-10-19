import Image from 'next/image'
import React from 'react'
import moment from 'moment'
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownTrigger } from '@nextui-org/react';
import { Bars2Icon, ChevronDownIcon } from '@heroicons/react/24/solid';
import { NotificationIcon } from '@/icons';
import { AdjustmentsHorizontalIcon } from "@heroicons/react/24/outline";

interface NavBarProps {
    setOpen: (open: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ setOpen }) => {

    const notificationCount = 120;

    return (
        <header className="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white-smoke py-4 scroll-mb-20">

            <nav className="flex basis-full items-center w-full mx-auto px-3 md:px-6">

                <div className="w-full flex items-center ml-auto justify-between sm:gap-x-3 ">

                    <div className="mr-5 md:mr-8">

                        <div className="flex items-center gap-x-3">

                            <Image width={100} height={100} alt="Profile" src="/images/profile.png"
                                className='size-10 rounded-full object-cover' />

                            <div className="-space-y-1 pt-1">
                                <h1 className="text-sm 2xl:text-base text-black font-semibold">Hey, Tea!</h1>
                                <p className='text-gray-800 text-[12px] sm:text-xs font-light'>
                                    <span className='hidden md:block'>{moment().format('dddd, MMMM D, YYYY')}</span>
                                    <span className='block md:hidden'>{moment().format('ddd, MMM D, YYYY')}</span>
                                </p>
                            </div>

                        </div>

                    </div>

                    {/* MENU BAR ICON */}
                    <div className="xl:hidden">
                        <Button onClick={() => setOpen(true)} isIconOnly radius='full' className='text-black bg-transparent border-none'>
                            <Bars2Icon className='size-5 text-black' />
                        </Button>
                    </div>

                    <div className="flex flex-row items-center justify-end gap-x-3 md:gap-x-4">

                        <div className="hidden sm:block">
                            <Button isIconOnly className='bg-white rounded-full shadow-2xl'>
                                <AdjustmentsHorizontalIcon className="size-5 text-[#211F1F] " />
                            </Button>
                        </div>

                        <div className="hidden sm:block">
                            <Dropdown>
                                <DropdownTrigger>
                                    <Button variant="solid" className='bg-white text-left flex items-center justify-between shadow-2xl h-12 px-3'>
                                        <div className="-space-y-1 pr-5">
                                            <h2 className='text-xs text-black font-bold'>30 days</h2>
                                            <p className="text-[12px] text-gray-700">20 Jul - 19 Aug, 2024</p>
                                        </div>
                                        <ChevronDownIcon className='text-gray-700 size-5' />
                                    </Button>
                                </DropdownTrigger>
                                <DropdownMenu aria-label="Static Actions">
                                    <DropdownItem key="new">New file</DropdownItem>
                                    <DropdownItem key="copy">Copy link</DropdownItem>
                                    <DropdownItem key="edit">Edit file</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </div>

                        <Button isIconOnly className='bg-white rounded-full shadow-2xl'>
                            <div className="relative">
                                {notificationCount > 0 && (
                                    <div className="absolute min-w-[18px] p-0.5 h-[18px] -top-1.5 -right-2 rounded-full text-white flex items-center justify-center text-[9px] bg-error-500">
                                        {notificationCount > 9 ? '9+' : notificationCount}
                                    </div>
                                )}
                                <NotificationIcon className='size-5' fill='#211F1F' />
                            </div>
                        </Button>

                    </div>

                </div>

            </nav>

        </header>
    )
}

export default NavBar