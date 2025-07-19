import { CustomInput, CustomPassword, CustomPhoneInput } from '@/components/FormElements'
import { Button } from '@/components/ui'
import { vendorRegisteration } from '@/services'
import type { AuthType } from '@/types'
import { getErrorMessage } from '@/utils'
import { RegisterSchema } from '@/utils/schema'
import { Form, Formik } from 'formik'
import React, { useState } from 'react'
import toast from 'react-hot-toast'

const VendorInfo: React.FC<{
    email?: string;
    onNextStep: () => void;
}> = ({ email, onNextStep }) => {

    const initialValues: Omit<AuthType, | 'deviceImei'> = {
        email: email || '',
        firstName: '',
        lastName: '',
        phone: '',
        password: '',
        confirmPassword: '',
        channel: 2
    };

    const [loading, setLoading] = useState(false)
    const [phoneCountryCode, setPhoneCode] = useState('')

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={RegisterSchema}
            onSubmit={async (values) => {

                setLoading(true)

                try {

                    const payload = {
                        ...values,
                        phoneCountryCode,
                    };
                    
                    const response = await vendorRegisteration(payload);
                    toast.success(response.result?.message);
                    onNextStep()

                } catch (error) {
                    toast.error(getErrorMessage(error))
                } finally {
                    setLoading(false)
                }

            }}>
            {() => (
                <Form autoComplete="off">

                    <div className="grid lg:grid-cols-2 gap-3 mb-12 lg:mb-32">

                        <CustomInput
                            label="First name"
                            name="firstName"
                            type="text"
                            placeholder="Enter your first name"
                        />

                        <CustomInput
                            label="Last name"
                            name="lastName"
                            type="text"
                            placeholder="Enter your last name"
                        />

                        <CustomInput
                            label="Email"
                            name="email"
                            type="email"
                            disabled
                            placeholder="example@gmail.com"
                        />


                        <CustomPhoneInput onDialingCodeChange={(code) => setPhoneCode(code)} className='py-1.5' name="phone" label="Phone number" placeholder="Enter phone number" />

                        <CustomPassword
                            label="Password"
                            name="password"
                            placeholder="Password"
                        />

                        <CustomPassword
                            label="Confirm password"
                            name="confirmPassword"
                            placeholder="Confirm Password"
                        />

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

export default VendorInfo