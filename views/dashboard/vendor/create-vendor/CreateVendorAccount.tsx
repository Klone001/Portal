import { PopupModal } from '@/components/ui';
import { XMarkIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react'
import VendorInfo from './VendorInfo';
import SuccessReg from './SuccessReg';
import { OnBoardingStepFour, OnBoardingStepOne, OnBoardingStepThree, OnBoardingStepTwo } from './onboarding';
import VendorEmailVerification from './VendorEmailVerification';
import toast from 'react-hot-toast';
import { getErrorMessage } from '@/utils';
import { createVendorProfile } from '@/services';

interface Step {
    id: string;
    component: React.FC<any>;
    // component: React.FC<{
    //     onNextStep: () => void;
    //     email?: string;
    //     setOpen: React.Dispatch<React.SetStateAction<boolean>>;
    // }>;
}

const CreateVendorAccount = ({ open, setOpen, email }:
    { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>>; email: string }) => {

    const onClose = () => {
        setOpen(false)
    }

    const [currentStep, setCurrentStep] = useState<string>('create_account');
    const [formData, setFormData] = useState<Record<string, any>>({});

    const updateFormData = (newValues: Record<string, any>) => {
        setFormData((prev) => ({ ...prev, ...newValues }));
    };

    const handleSubmit = async (data: Record<string, any>) => {

        const updatedData = { ...formData, ...data };
        setFormData(updatedData);

        const payload = new FormData();

        payload.append('ProfileUpdateLastAction', updatedData.uploadAction || '');
        payload.append('RegistrationNumber', updatedData?.RegistrationNumber || '');
        payload.append('BusinessName', updatedData?.BusinessName || '');
        payload.append('BusinessCertificate', updatedData?.BusinessCertificate || '');
        payload.append('BusinessStoreFrontImage', updatedData?.BusinessStoreFrontImage || '');
        payload.append('BusinessCertificateUrl', '');

        payload.append('BusinessCategories', updatedData?.service?.join(',') || '');

        payload.append('TeamSize', updatedData.size || '');

        payload.append('Address', updatedData?.location || '');
        payload.append('Country', updatedData?.country || '');
        payload.append('CountryCode', updatedData?.countryCode || '');
        payload.append('State', updatedData?.state || '');
        payload.append('City', updatedData?.city || '');

        payload.append('BusinessLogo', updatedData?.BusinessLogo || '');
        payload.append('BusinessBackgroundImage', updatedData?.BusinessBackgroundImage || '');
        payload.append('BusinessAddressUrl', updatedData?.BusinessAddressUrl || '');

        payload.append('AddressLongitude', String(updatedData?.AddressLongitude || ''));
        payload.append('AddressLatitude', String(updatedData?.AddressLatitude || ''));
        payload.append('deviceLatitude', String(updatedData?.deviceLatitude || ''));
        payload.append('deviceLongitude', String(updatedData?.deviceLongitude || ''));

        payload.append('Timezone', String(updatedData?.Timezone || ''));
        payload.append('Pin', updatedData?.pin || '');

        try {
            await createVendorProfile(payload, data?.Timezone);

            const currentStepIndex = steps.findIndex(step => step.id === currentStep);

            if (currentStepIndex === steps.length - 1) {
                toast.success('Vendor onboarded successfully! Step submitted and under review.');
                setOpen(false);
                setCurrentStep('create_account');
                setFormData({});
            } else {
                handleNextStep();
                setFormData({});
            }

        } catch (error) {
            toast.error(getErrorMessage(error));
        }
    };

    const steps: Step[] = [
        { id: 'create_account', component: VendorInfo },
        { id: 'verify_account', component: VendorEmailVerification },
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
        const currentStepObj = steps.find(step => step.id == currentStep);
        if (!currentStepObj) return null;

        const StepComponent = currentStepObj.component;
        const isOnboardingStep = currentStep.startsWith('onboarding');

        if (currentStepObj) {
            return (
                <StepComponent
                    onNextStep={handleNextStep}
                    email={email}
                    setOpen={setOpen}
                    {...(isOnboardingStep && {
                        formData,
                        updateFormData,
                        handleSubmit,
                    })}
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
                {renderStepContent()}
            </div>

        </PopupModal>
    )
}

export default CreateVendorAccount