'use client';

import { NavBar, SideBar } from "@/components";
import { ReactNode, useState } from "react";

interface DashboardLayoutProps {
    children: ReactNode;
}

const DashboardLayout: React.FC<DashboardLayoutProps> = ({ children }) => {

    const [open, setOpen] = useState<boolean>(false);
    
    return (

        <div className='m-0 text-base antialiased'>

            <SideBar open={open} setOpen={setOpen} />

            <main className="relative h-full transition-all duration-200 ease-soft-in-out xl:ml-[18rem] 2xl:ml-[18rem]">

                <NavBar setOpen={setOpen} />

                <div className="w-full p-3 md:p-6 m-auto overflow-x-hidden bg-white-smoke min-h-screen">

                    {children}

                </div>

            </main>

        </div>

    );
};

export default DashboardLayout;
