import { CustomInput } from '@/components/FormElements';
import { Button, PopupModal } from '@/components/ui'
import type { User } from '@/types';
import { EmailSchema } from '@/utils/schema';
import { Form, Formik } from 'formik';
import React, { useState } from 'react'
import CreateVendorAccount from './CreateVendorAccount';

const CreateVendorEmail = ({ open, setOpen }: { open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }) => {

    const initialValues: Partial<Pick<User, 'email'>> = {
        email: '',
    };

    const [isLoading, setLoading] = useState(false)
    const [openAccount, setOpenAccount] = useState(false)

    const [ email, setEmail ] = useState('')

    return (
        <>

            <PopupModal
                size='xl'
                isOpen={open}
                onClose={setOpen}
                placement='center'
                className='py-3'>

                <div className="h-full max-h-[50vh] py-20">

                    <div className="flex flex-col">

                        <h2 className='text-black font-bold text-2xl pb-1'>Create Vendor</h2>
                        <p className="text-xs lg:text-sm text-black/80">Enter email for from vendor</p>

                    </div>

                    <Formik
                        initialValues={initialValues}
                        validationSchema={EmailSchema}
                        onSubmit={(values) => {
                            setLoading(true)

                            setTimeout(() => {
                                setLoading(false)
                                setOpen(false)
                                setOpenAccount(true)
                                setEmail(values.email || '')
                            }, 500);

                        }}>
                        {() => (

                            <Form autoComplete="off">

                                <CustomInput
                                    label=""
                                    name="email"
                                    type="email"
                                    placeholder="example@gmail.com"
                                />

                                <Button
                                    isLoading={isLoading}
                                    type='submit'
                                    className='mt-6 py-6 w-full'>
                                    Continue
                                </Button>

                            </Form>

                        )}

                    </Formik>

                </div>

            </PopupModal>

            <CreateVendorAccount email={email} open={openAccount} setOpen={setOpenAccount} />

        </>
    )
}

export default CreateVendorEmail