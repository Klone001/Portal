import { PopupModal } from '@/components/ui';
import { XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
import VendorInfo from './VendorInfo';
import SuccessReg from './SuccessReg';
import { OnBoardingStepFour, OnBoardingStepOne, OnBoardingStepThree, OnBoardingStepTwo } from './onboarding';

interface Step {
    id: string;
    component: React.FC<{ onNextStep: () => void;  email?: string; setOpen: React.Dispatch<React.SetStateAction<boolean>> }>;
}
const CreateVendorAccount = ({ open, setOpen, email }: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>>; email: string }) => {

    const onClose = () => {
        setOpen(false)
    }

    const [currentStep, setCurrentStep] = useState<string>('onboarding_four');

    const steps: Step[] = [
        { id: 'create_account', component: VendorInfo },
        { id: 'successful_account', component: SuccessReg },
        { id: 'onboarding_one', component: OnBoardingStepOne },
        { id: 'onboarding_two', component: OnBoardingStepTwo },
        { id: 'onboarding_three', component: OnBoardingStepThree },
        { id: 'onboarding_four', component: OnBoardingStepFour },
    ];

    const handleNextStep = () => {
        const currentStepIndex = steps.findIndex(step => step.id === currentStep);
        if (currentStepIndex < steps.length - 1) {
            setCurrentStep(steps[currentStepIndex + 1].id);
        }
    };

    const renderStepContent = () => {
        const currentStepObj = steps.find(step => step.id === currentStep);

        if (currentStepObj) {
            const StepComponent = currentStepObj.component;
            return (
                <StepComponent
                    onNextStep={handleNextStep}
                    email={email}
                    setOpen={setOpen}
                />
            );
        }

        return null;
    };

    return (
        <PopupModal
            size='6xl'
            isOpen={open}
            onClose={() => setOpen(true)}
            placement='center'
            showCloseButton={false}
            className='py-3 max-h-[95vh]'>

            <div className="flex items-center gap-2 mb-6">

                <button
                    onClick={onClose}
                    className="bg-[#F9F9F9] h-10 w-10 flex items-center justify-center rounded-full z-30 p-1">
                    <XMarkIcon className="h-4 w-4 text-black" />
                </button>

                <h2 className='text-sm'> New Vendor </h2>

            </div>

            <div className="px-5 md:px-8">
                { renderStepContent() }
            </div>

        </PopupModal>
    )
}

export default CreateVendorAccount