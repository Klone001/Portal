import { FileUpload } from '@/components';
import { CustomInput } from '@/components/FormElements';
import { Button } from '@/components/ui';
import { Form, Formik } from 'formik';
import React, { useState } from 'react'

const OnBoardingStepOne = ({ onNextStep }: { onNextStep: () => void; }) => {

    const [loading, setLoading] = useState(false)

    const initialValues = {
        businessName: '',
        regNumber: '',
        File: null,
    };

    return (
        <Formik
            initialValues={initialValues}
            onSubmit={async (values) => {

                setLoading(true)

                setTimeout(() => {
                    setLoading(false)
                    onNextStep()
                }, 300);

            }}>
            {({ touched, errors }) => (
                <Form autoComplete="off">

                    <div className="grid lg:grid-cols-2 gap-3 mb-12 lg:mb-32">

                        <CustomInput
                            label="Business name"
                            name="businessName"
                            type="text"
                            placeholder="Enter your business name"
                        />

                        <CustomInput
                            label="Registration number"
                            name="regNumber"
                            type="text"
                            placeholder="0000000"
                        />

                        <div>

                            <label className="form-label text-xs mb-1">Business certificate (Optional)</label>

                            <FileUpload name="File"
                                title=""
                                label="Drag and drop your certificate"
                                multiple={false}
                                accept="image/*"
                                error={touched.File && !!errors.File}
                            />

                            {touched.File && errors.File && (
                                <div className="text-red-600 text-xs font-light mt-0 pt-1">{errors.File}</div>
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