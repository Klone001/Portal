import { AuthTitle, SelectionCard } from '@/components';
import { Button } from '@/components/ui';
import React, { useState } from 'react'

const data = [
    {
        label: "Tattoo & Piercing",
        icon: "/images/categories/tatoo.png",
        disabled: false,
    },
    {
        label: "Female salon",
        icon: "/images/categories/female.png",
        disabled: false,
    },
    {
        label: "Male salon",
        icon: "/images/categories/male.png",
        disabled: false,
    },
    {
        label: "Spa",
        icon: "/images/categories/spa.png",
        disabled: false,
    },
    {
        label: "Restaurant",
        icon: "/images/categories/rest.png",
        disabled: true,
    },
    {
        label: "Car rentals",
        icon: "/images/categories/car.png",
        disabled: true,
    }
];

const OnBoardingStepTwo = ({ onNextStep }: { onNextStep: () => void; }) => {

    const [loading, setLoading] = useState(false)

    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleSelect = (name: string) => {
        setSelectedCategories((prev) =>
            prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
        );
    };

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
                title='Category'
                desc='Select categories for store'
            />

            <div className="grid grid-cols-4 gap-4 pt-12 mb-12 lg:mb-28">

                {data?.map((item, index: number) => (
                    <SelectionCard
                        key={index}
                        label={item.label}
                        image={item.icon}
                        disabled={item.disabled}
                        selected={selectedCategories.includes(item.label)}
                        onSelect={() => !item.disabled && handleSelect(item.label)}
                    />
                ))}

            </div>

            <div className="flex justify-center pb-5">
                <Button onPress={handleSubmit} isDisabled={selectedCategories.length < 1} type="submit" className="py-6 w-full max-w-md" loading={loading}>
                    Continue
                </Button>
            </div>

        </>
    )
}

export default OnBoardingStepTwo