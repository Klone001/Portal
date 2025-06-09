import { AuthTitle, SelectionCard } from '@/components';
import { Button } from '@/components/ui';
import { UserIcon, UsersIcon } from '@heroicons/react/24/outline';
import React, { useState } from 'react'

const data = [
    { label: 'Just me', icon: <UserIcon className='size-6' /> },
    { label: '2-5 people', icon: <UsersIcon className='size-6' />},
    { label: '6-10 people', icon: <UsersIcon className='size-6' />},
    { label: '11+ people', icon: <UsersIcon className='size-6' />}
];


const OnBoardingStepThree = ({ onNextStep }: { onNextStep: () => void; }) => {

    const [loading, setLoading] = useState(false)

    const [selected, setSelected] = useState<string | null>(null);

    const handleSubmit = () => {
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            onNextStep()
        }, 300);
    }

    return (
        <>

            <AuthTitle
                title="Team size?"
                desc="Pick the categor(y)(ies) you fall in"
            />

            <div className="grid grid-cols-4 gap-4 pt-12 mb-12 lg:mb-28">

                {data?.map((item, index: number) => (
                    <SelectionCard
                        key={index}
                        label={item.label}
                        icon={item?.icon}
                        selected={selected === item.label}
                        onSelect={() => setSelected(item.label)}
                    />
                ))}

            </div>

            <div className="flex justify-center pb-5">
                <Button onPress={handleSubmit} isDisabled={!selected} type="submit" className="py-6 w-full max-w-md" loading={loading}>
                    Continue
                </Button>
            </div>

        </>
    )
}

export default OnBoardingStepThree