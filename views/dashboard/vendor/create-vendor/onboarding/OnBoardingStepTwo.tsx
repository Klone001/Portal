import { AuthTitle, SelectionCard } from '@/components';
import { SelectionCardSkeleton } from '@/components/skeleton';
import { Button } from '@/components/ui';
import { PROFILE_UPDATE_ACTIONS } from '@/data';
import { authFetch } from '@/lib/hooks';
import { ApiResponse, CategoryTypeWithId } from '@/types';
import React, { useEffect, useState } from 'react'

const OnBoardingStepTwo = ({
    updateFormData,
    handleSubmit,
}: {
    updateFormData: (data: Record<string, any>) => void;
    handleSubmit: (data: Record<string, any>) => Promise<void>;
}) => {

    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState<CategoryTypeWithId[]>([])

    async function getCategories() {
        setLoading(true);
        const response = await authFetch<ApiResponse>(`/business-category`);
        setCategories(response?.result.data?.items || []);
        setLoading(false);
    }

    useEffect(() => {
        getCategories();
    }, []);


    const [selectedCategories, setSelectedCategories] = useState<string[]>([]);

    const handleSelect = (name: string) => {
        setSelectedCategories((prev) =>
            prev.includes(name) ? prev.filter((item) => item !== name) : [...prev, name]
        );
    };

    const [isLoading, setIsLoading] = useState(false)

    const handleSubmitPayload = async () => {

        setIsLoading(true)

        const updatedValues = {
            service: selectedCategories || [],
            uploadAction: PROFILE_UPDATE_ACTIONS.BUSINESS_CATEGORIES,
        };

        updateFormData(updatedValues);

        await handleSubmit(updatedValues);
        setLoading(false);

    }

    return (
        <>

            <AuthTitle
                title='Category'
                desc='Select categories for store'
            />

            <div className="grid grid-cols-4 gap-4 pt-12 mb-12 lg:mb-28">
                {loading
                    ? [...Array(8)].map((_, index) => (
                        <SelectionCardSkeleton key={index} />
                    ))
                    : categories.map((item) => (
                        <SelectionCard
                            key={item.id}
                            label={item.name || ''}
                            image={item.imageUrl}
                            selected={selectedCategories.includes(item.id.toString())}
                            onSelect={() => handleSelect(item.id.toString())}
                        />
                    ))}
            </div>


            <div className="flex justify-center pb-5">
                <Button onPress={handleSubmitPayload} isDisabled={selectedCategories.length < 1} type="submit" className="py-6 w-full max-w-md" loading={isLoading}>
                    Continue
                </Button>
            </div>

        </>
    )
}

export default OnBoardingStepTwo