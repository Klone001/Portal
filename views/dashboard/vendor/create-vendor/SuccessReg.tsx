import { AuthTitle } from '@/components'
import { Button } from '@/components/ui'
import Image from 'next/image'
import React from 'react'

const SuccessReg = ({ setOpen }: { setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {
    return (
        <div className='flex flex-col justify-center relative h-[50vh] sm:h-[70vh] 2xl:h-[50vh]'>

            <Image src='/images/kite.svg' width={847} height={458} alt='kite' className='absolute top-4 -left-20' />

            <div className='max-w-md m-auto tracking-tight'>

                <AuthTitle
                    title='Email on the way'
                    desc='We sent you a link to complete account setup, if it doesn’t show up check spam folder'
                />

                <div className="flex flex-col gap-y-3 pt-10">

                    <Button onPress={() => setOpen(false)}>Return to Home</Button>

                    <Button  className='bg-[#F3F5F5] text-off-black'>Set up account</Button>

                </div>

            </div>

        </div>
    )
}

export default SuccessReg