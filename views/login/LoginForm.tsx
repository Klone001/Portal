'use client'

import React, { useState } from 'react';
import { CustomInput, CustomPassword } from '@/components/FormElements';
import { Form, Formik, FormikProps } from 'formik';
import { Button } from '@/components/ui';
import { useRouter, useSearchParams } from 'next/navigation';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';
import { AuthType } from '@/types';
import { LoginSchema } from '@/utils/schema';

const LoginForm: React.FC = () => {

    const callbackUrl = useSearchParams().get("callbackUrl");

    const [loading, setLoading] = useState(false);
    const router = useRouter();

    const initialValues: AuthType = {
        emailAddress: '',
        password: '',
    };

    const handleSubmit = async (values: AuthType) => {

        setLoading(true);

        const res = await signIn("credentials", {
            redirect: false,
            emailAddress: values.emailAddress,
            password: values.password,
            deviceImei: '88A994ikf05j',
            channel: 3
        });

        setLoading(false);

        if (res?.ok) {
            toast.success("User logged in successfully!");
            router.replace(callbackUrl || "/dashboard");
        } else {
            const error = res?.error || 'Login failed';
            toast.error(error);
        }

    };

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={LoginSchema}
            onSubmit={handleSubmit}
        >
            {(props: FormikProps<AuthType>) => (
                <Form autoComplete="off">

                    <CustomInput
                        label=""
                        name="emailAddress"
                        type="email"
                        placeholder="example@gmail.com"
                        className='md:text-sm'
                    />

                    <CustomPassword
                        label=""
                        name="password"
                        placeholder="Password"
                        className='md:text-sm'
                    />

                    <Button type='submit' className='mt-10 py-6 w-full' loading={loading}>
                        Continue
                    </Button>

                </Form>
            )}
        </Formik>
    );
};

export default LoginForm;
