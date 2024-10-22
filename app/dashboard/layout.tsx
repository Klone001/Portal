import ClientDashboardLayout from '@/components/ClientDashboardLayout';
import { authOptions } from '@/lib';
import { getServerSession } from 'next-auth';
import React, { ReactNode } from 'react'

const DashboardLayout = async ({ children }: { children: ReactNode }) => {

    const session = await getServerSession(authOptions);

    if (!session?.user) {
        return null
    }

    return (
        <div className='m-0 text-base antialiased'>

            <ClientDashboardLayout profile={session?.user}>

                {children}

            </ClientDashboardLayout>
        </div>

    )
}

export default DashboardLayout