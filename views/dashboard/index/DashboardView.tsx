import React from 'react'
import { Geography, LiveActivity, Overview, TopCategories, TotalRevenue, UsersAnalysis } from '@/components/dashboard'
import { activityData, overviewSalesData } from '@/data'

const DashboardView = () => {

  return (
    <>

      <div className="flex flex-wrap lg:flex-row -mx-4 bg-transparent mb-4 lg:mb-0">

        <div className="w-full lg:w-[70%] 2xl:w-[80%] px-4 mb-4 space-y-5  flex flex-col">

          <Overview overviewData={overviewSalesData} />

          <div className="grid md:grid-cols-2 gap-3">

            <TotalRevenue />

            <UsersAnalysis />

            <TopCategories />

            <Geography />

          </div>

        </div>

        <div className="w-full lg:w-[30%] 2xl:w-[20%] pr-4 pl-4 lg:pl-0 space-y-5  flex flex-col">

          <LiveActivity title='Live activities' data={activityData} />

        </div>

      </div>

    </>
  )
}

export default DashboardView