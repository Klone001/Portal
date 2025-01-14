import { AccountInfomation, AccountInsight, LoginInformation } from '@/components/account'
import { VendorBookingsLayout } from '@/components/bookings'
import { Button } from '@nextui-org/react'
import React from 'react'
import VendorInformation from './VendorInformation'
import { ExclamationTriangleIcon } from '@heroicons/react/24/outline'
import { Alert } from '@/components/ui'
import { TransactionLayout } from '@/components/transactions'

const VendorDetailsView = ({ vendorId }: { vendorId: number }) => {

  return (
    <>

      <div className="mb-5 w-full lg:w-[65%] 2xl:w-[70%]">

        <Alert
          className='mb-2'
          type='warning'
          message='This account is pending approval'
          icon={ExclamationTriangleIcon}
          button={
            <Button size="sm" variant="flat" className='bg-secondary-500 text-secondary-50'>
              Review Information
            </Button>
          } />

        <Alert
          message='This account has been deactivated'
          icon={ExclamationTriangleIcon}
          button={
            <Button size="sm" variant="flat" className='bg-stale-gray-800 text-secondary-50'>
              Review Information
            </Button>
          } />

      </div>

      <div className="flex flex-wrap lg:flex-row -mx-4 bg-transparent mb-4 lg:mb-0">

        <div className="w-full lg:w-[65%] 2xl:w-[70%] px-4 mb-4 space-y-5  flex flex-col">

          <VendorInformation />

          <div className="grid md:grid-cols-2 gap-5">

            <VendorBookingsLayout />

            <TransactionLayout />

          </div>

        </div>

        <div className="w-full lg:w-[35%] 2xl:w-[30%] pr-4 pl-4 lg:pl-0 space-y-5  flex flex-col">

          <AccountInfomation role='vendor' />

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

export default VendorDetailsView