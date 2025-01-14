import { Button } from '@nextui-org/react'
import React from 'react'

const LoginInformation = () => {
    
    return (
        <div className="bg-white rounded-lg p-5 shadow-dashShadow h-full">

            <div className="flex items-center justify-between mb-5">

                <h2 className="text-black text-base 2xl:text-lg font-medium">Login info</h2>

                <button className='text-xs text-blue underline underline-offset-2 !p-0'>View All</button>

            </div>

            <div className="flex gap-y-5 flex-col">

                <div className="flex items-end justify-between">

                    <div className="flex-1 gap-y-1.5">
                        <h3 className="text-off-black text-sm 2xl:text-base font-medium">Windows Computer</h3>
                        <p className="text-[12px] 2xl:text-xs text-gray-700">Lagos, Nigeria</p>
                        <p className="text-[12px] 2xl:text-xs text-gray-700">Google Chrome</p>
                        <p className="text-[12px] 2xl:text-xs text-gray-700">10 min ago</p>
                    </div>

                    <Button size='sm' className='bg-gray-700 text-xs text-white' radius='full'>
                        Log out
                    </Button>

                </div>

                <div className="flex items-end justify-between">

                    <div className="flex-1 gap-y-1.5">
                        <h3 className="text-off-black text-sm 2xl:text-base font-medium">Windows Computer</h3>
                        <p className="text-[12px] 2xl:text-xs text-gray-700">Lagos, Nigeria</p>
                        <p className="text-[12px] 2xl:text-xs text-gray-700">Google Chrome</p>
                        <p className="text-[12px] 2xl:text-xs text-gray-700">10 min ago</p>
                    </div>

                    <Button size='sm' className='bg-gray-700 text-xs text-white' radius='full'>
                        Log out
                    </Button>

                </div>
                
            </div>

        </div>
    )
}

export default LoginInformation