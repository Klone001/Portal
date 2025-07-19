import { FileUpload } from '@/components';
import { CustomInput } from '@/components/FormElements';
import { Button } from '@/components/ui';
import { PROFILE_UPDATE_ACTIONS } from '@/data';
import { onboardingStepOneSchema } from '@/utils/schema';
import { Form, Formik } from 'formik';
import React, { useState } from 'react'

const OnBoardingStepOne = ({
    formData,
    updateFormData,
    handleSubmit,
}: {
    formData: Record<string, any>;
    updateFormData: (data: Record<string, any>) => void;
    handleSubmit: (data: Record<string, any>) => Promise<void>;
}) => {

    const [loading, setLoading] = useState(false)

    const initialValues = {
        BusinessName: formData?.BusinessName || '',
        RegistrationNumber: formData?.RegistrationNumber || '',
        BusinessCertificate: null,
    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={onboardingStepOneSchema}
            onSubmit={async (values) => {

                setLoading(true);
                console.log('Form values:', values);

                const updatedValues = {
                    ...values,
                    uploadAction: PROFILE_UPDATE_ACTIONS.BUSINESS_DETAILS,
                };

                updateFormData(updatedValues);

                await handleSubmit(updatedValues);
                setLoading(false);

            }}>
            {({ touched, errors }) => (
                <Form autoComplete="off">

                    <div className="grid lg:grid-cols-2 gap-3 mb-12 lg:mb-32">

                        <CustomInput
                            label="Business name"
                            name="BusinessName"
                            type="text"
                            placeholder="Enter your business name"
                        />

                        <CustomInput
                            label="Registration number"
                            name="RegistrationNumber"
                            type="text"
                            placeholder="0000000"
                        />

                        <div>

                            <label className="form-label text-xs mb-1">Business certificate (Optional)</label>

                            <FileUpload name="BusinessCertificate"
                                title=""
                                label="Drag and drop your certificate"
                                multiple={false}
                                accept="image/*"
                                error={touched.BusinessCertificate && !!errors.BusinessCertificate}
                            />

                            {touched.BusinessCertificate && errors.BusinessCertificate && (
                                <div className="text-red-600 text-xs font-light mt-0 pt-1">{errors.BusinessCertificate}</div>
                            )}

                        </div>

                    </div>

                    <div className="flex justify-center pb-5">
                        <Button type="submit" className="py-6 w-full max-w-md" loading={loading}>
                            Continue
                        </Button>
                    </div>

                </Form>
            )}
        </Formik>
    )
}

export default OnBoardingStepOne