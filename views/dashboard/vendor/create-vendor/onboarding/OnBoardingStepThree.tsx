import { AuthTitle, SelectionCard } from '@/components';
import { Button } from '@/components/ui';
import { PROFILE_UPDATE_ACTIONS, vendorCount } from '@/data';
import React, { useState } from 'react'


const OnBoardingStepThree = ({
    updateFormData,
    handleSubmit,
}: {
    updateFormData: (data: Record<string, any>) => void;
    handleSubmit: (data: Record<string, any>) => Promise<void>;
}) => {

    const [loading, setLoading] = useState(false)

    const [selected, setSelected] = useState<string | null>(null);

    const handleSubmitPayload = async () => {
        setLoading(true)

        const updatedValues = {
            size: selected || [],
            uploadAction: PROFILE_UPDATE_ACTIONS.TEAM_SIZE,
        };

        updateFormData(updatedValues);

        await handleSubmit(updatedValues);
        setLoading(false);
    }

    return (
        <>

            <AuthTitle
                title="Team size?"
                desc="Pick the categor(y)(ies) you fall in"
            />

            <div className="grid grid-cols-4 gap-4 pt-12 mb-12 lg:mb-28">

                {vendorCount?.map((item, index: number) => (
                    <SelectionCard
                        key={index}
                        label={item.label}
                        icon={item?.icon}
                        selected={selected === item.value}
                        onSelect={() => setSelected(item.value)}
                    />
                ))}

            </div>

            <div className="flex justify-center pb-5">
                <Button onPress={handleSubmitPayload} isDisabled={!selected} type="submit" className="py-6 w-full max-w-md" loading={loading}>
                    Continue
                </Button>
            </div>

        </>
    )
}

export default OnBoardingStepThree