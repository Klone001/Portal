'use client';

import { NavBar, SideBar } from "@/components";
import { User } from "@/types";
import { ReactNode, useState } from "react";


const ClientDashboardLayout = ({ children, profile } : { children: ReactNode, profile: User } ) => {
    
    const [open, setOpen] = useState<boolean>(false);

    return (
        <>

            <SideBar profile={profile} open={open} setOpen={setOpen} />

            <main className="relative h-full transition-all duration-200 ease-soft-in-out xl:ml-[18rem] 2xl:ml-[18rem]">

                <NavBar profile={profile} setOpen={setOpen} />

                <div className="w-full p-3 md:p-6 m-auto overflow-x-hidden bg-white-smoke min-h-screen">

                    {children}

                </div>

            </main>

        </>
    );
};

export default ClientDashboardLayout;
