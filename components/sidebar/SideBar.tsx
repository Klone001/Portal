'use client'

import { usePathname } from 'next/navigation'
import Image from 'next/image';
import Link from 'next/link';
import { ChartIcon, CustomerIcon, DashboardIcon, LogoutIcon, SearchIcon, SettingsIcon, ShopIcon, SupportIcon } from '../../icons'
import React from 'react';
import SidebarLink from './SidebarLink';
import { Button } from '../ui';
import { XMarkIcon } from '@heroicons/react/24/solid';
import { signOut } from 'next-auth/react';
import { Image as NextImage } from "@nextui-org/react";
import { User } from '@/types';


interface SidebarProps {
    open: boolean;
    setOpen: (open: boolean) => void;
    profile: User
}

const SideBar: React.FC<SidebarProps> = ({ open, setOpen, profile }) => {

    const pathname = usePathname()

    const links = [
        {
            href: '/dashboard/category',
            icon: <ShopIcon className='w-5 h-5' fill='#ACACAC' />,
            activeIcon: <ShopIcon className='w-5 h-5' fill='#FFF' />,
            text: 'BC Management'
        },
        {
            href: '/dashboard/customer',
            icon: <CustomerIcon className='w-6 h-6' fill='#ACACAC' />,
            activeIcon: <CustomerIcon className='w-6 h-6' fill='#FFF' />,
            text: 'Customer Management'
        },
        {
            href: '/dashboard/vendor',
            icon: <ShopIcon className='w-5 h-5' fill='#ACACAC' />,
            activeIcon: <ShopIcon className='w-5 h-5' fill='#FFF' />,
            text: 'Vendor Management'
        },
        {
            href: '/dashboard/finance',
            icon: <CustomerIcon className='w-6 h-6' fill='#ACACAC' />,
            activeIcon: <CustomerIcon className='w-6 h-6' fill='#FFF' />,
            text: 'Finance Hub'
        },
        {
            href: '/dashboard/analytics ',
            icon: <ChartIcon className='size-4.5' fill='#ACACAC' />,
            activeIcon: <ChartIcon className='size-4.5' fill='#FFF' />,
            text: 'Analytics '
        },
    ];

    const handleLinkClick = () => {
        setTimeout(() => {
            setOpen(false);
        }, 100);
    };

    return (
        <>

            {open && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 block xl:hidden z-20"
                    onClick={() => setOpen(false)}
                />
            )}

            <aside className={`sidebar fixed inset-y-0 left-0 flex flex-col overflow-x-hidden px-5 transition-all duration-200 -translate-x-full bg-black border-0 z-10 overflow-y-auto ${open && 'translate-x-0'} max-w-72 xl:translate-x-0 w-72 z-50`}>

                <div className="sticky top-0 bg-black w-full z-10 pt-8 pb-4">

                    <div className="flex items-center">

                        <Link href="/dashboard" className="block ml-2 m-auto text-center text-sm whitespace-nowrap" onClick={handleLinkClick}>
                            <Image
                                src='/images/logo/logo_white.svg'
                                width={90} height={28}
                                alt="Logo"
                                className="w-[75px] transition-all duration-200 ease-soft-in-out"
                            />
                        </Link>

                        <Button onPress={() => setOpen(false)} isIconOnly className='bg-transparent border-none xl:hidden'>
                            <XMarkIcon  className='size-5 text-white' />
                        </Button>

                    </div>

                    <div className="relative mt-6">
                        <div className="absolute top-2.5 left-3">
                            <SearchIcon fill='#ACACAC' />
                        </div>
                        <input type="search" className="form-control h-10 border-none bg-[#1F1F1F] placeholder:text-gray-600 text-gray-600 text-[12px] placeholder:text-[12px] pl-9" placeholder='Search' />
                    </div>

                </div>

                <div className="flex-grow pt-7">

                    <div className="items-center block w-full h-auto grow basis-full">

                        <ul className="flex flex-col pl-0 mb-0 list-none space-y-2 2xl:space-y-3">

                            <li className="w-full">
                                <SidebarLink
                                    href='/dashboard'
                                    icon={<DashboardIcon className='size-5' fill='#ACACAC' />}
                                    activeIcon={<DashboardIcon className='size-5' fill='#FFF' />}
                                    text='Dashboard'
                                    isActive={pathname === '/dashboard'}
                                    onClick={handleLinkClick}
                                />
                            </li>

                            {links.map((link, index) => (
                                <li key={index} className="w-full">
                                    <SidebarLink
                                        href={link.href}
                                        icon={link.icon}
                                        activeIcon={link.activeIcon}
                                        text={link.text}
                                        isActive={pathname.startsWith(link.href)}
                                        onClick={handleLinkClick}
                                    />
                                </li>
                            ))}

                        </ul>

                    </div>

                </div>

                <div className="pt-2.5 pb-4 w-full">

                    <ul className="flex flex-col pl-0 mb-0 list-none space-y-2 2xl:space-y-3">

                        <li className="w-full">
                            <SidebarLink
                                href='/dashboard/support'
                                icon={<SupportIcon className='size-5' fill='#ACACAC' />}
                                activeIcon={<SupportIcon className='size-5' fill='#FFF' />}
                                text='Support'
                                isActive={pathname === '/dashboard/support'}
                                onClick={handleLinkClick}
                            />
                        </li>

                        <li className="w-full">
                            <SidebarLink
                                href='/dashboard/settings'
                                icon={<SettingsIcon className='size-5' fill='#ACACAC' />}
                                activeIcon={<SettingsIcon className='size-5' fill='#FFF' />}
                                text='Settings'
                                isActive={pathname === '/dashboard/settings'}
                                onClick={handleLinkClick}
                            />
                        </li>

                        <div className="pt-4">

                            <div className="flex items-center justify-between bg-[#1F1F1F] p-3 rounded-xl cursor-pointer">

                                <div className="flex items-center gap-x-2.5">

                                <NextImage as={Image} width={100} height={100} alt="Profile" src="/images/profile.png" className='w-10 h-10 max-w-10 max-h-10 rounded-full object-cover' />

                                    <div className="-space-y-2">
                                        <h1 className="text-xs text-white font-medium"> { profile.firstName } </h1>
                                        <p className='text-gray-700 text-[12px]'>@tea4toye</p>
                                    </div>

                                </div>

                                <Button onPress={() => signOut()} isIconOnly className='bg-transparent border-none text-white'>
                                    <LogoutIcon className='size-4.5' fill='#DD524D' />
                                </Button>

                            </div>

                        </div>

                    </ul>

                </div>

            </aside>

        </>
    )
}

export default SideBar