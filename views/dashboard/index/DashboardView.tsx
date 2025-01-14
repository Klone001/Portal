import React from 'react'
import { LiveActivity } from './activities'
import { Geography, Overview, TopCategories, TotalRevenue, UsersAnalysis } from '@/components/dashboard'

const DashboardView = () => {

  return (
    <>

      <div className="flex flex-wrap lg:flex-row -mx-4 bg-transparent mb-4 lg:mb-0">

        <div className="w-full lg:w-[70%] xl:w-[75%] px-4 mb-4 space-y-5  flex flex-col">

          <Overview />

          <div className="grid md:grid-cols-2 gap-5">

            <TotalRevenue />

            <UsersAnalysis />

            <TopCategories />

            <Geography />

          </div>

        </div>

        <div className="w-full lg:w-[30%] xl:w-[25%] pr-4 pl-4 lg:pl-0 space-y-5  flex flex-col">

          <LiveActivity />

        </div>

      </div>

    </>
  )
}

export default DashboardView