import React from 'react'
import CustomerInformation from './CustomerInformation'
import { Button } from '@nextui-org/react'
import { AccountInfomation, AccountInsight, LoginInformation } from '@/components/account'
import { BookingsLayout } from '@/components/bookings'

const CustomerDetails = ({ userId }: { userId: number }) => {
  return (
    <>

      <div className="flex flex-wrap lg:flex-row -mx-4 bg-transparent mb-4 lg:mb-0">

        <div className="w-full lg:w-[65%] 2xl:w-[70%] px-4 mb-4 space-y-5  flex flex-col">

          <CustomerInformation />

          <BookingsLayout />

        </div>

        <div className="w-full lg:w-[35%] 2xl:w-[30%] pr-4 pl-4 lg:pl-0 space-y-5  flex flex-col">

          <AccountInfomation role='user' />

          <AccountInsight />

          <LoginInformation />

        </div>

      </div>

      {/* ACCOUNT FUNCTIONS */}
      <div className="flex items-center justify-center m-auto mt-5">

        <Button variant='light' className='text-error-400 text-xs'>Delete Account</Button>

        <Button variant='light' className='text-off-black text-xs'>Suspend Account</Button>

      </div>

    </>
  )
}

export default CustomerDetails