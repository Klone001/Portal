import { FileUpload } from '@/components';
import { CustomInput } from '@/components/FormElements';
import { Button, PopupModal } from '@/components/ui'
import { CategoryType } from '@/types';
import { addCategorySchema } from '@/utils/schema';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import { Form, Formik, FormikProps } from 'formik';
import React, { useState } from 'react'

const AddCategory: React.FC<{ open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ open, setOpen }) => {

    const [loading, setLoading] = useState(false)

    const initialValues: CategoryType = {
        Name: '',
        File: null,
    };

    return (
        <PopupModal
            size='xl'
            isOpen={open}
            onClose={() => setOpen(false)}
            placement='center'
            backdrops='opaque'
            showCloseButton={false}
            className='max-h-[95vh] py-3'>

            <div className="flex items-center gap-x-3 mb-5">

                <Button onPress={() => setOpen(false)} isIconOnly className='bg-gray-300' size='sm' radius='full'>
                    <ArrowLongLeftIcon className='size-5 text-black' />
                </Button>

                <h2 className="text-black text-sm md:text-base font-medium">Create new category</h2>

            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={addCategorySchema}
                onSubmit={(values) => {
                    setLoading(true);
                    console.log(values);
                    setTimeout(() => {
                        setLoading(false);
                    }, 100);
                }}>
                {(props: FormikProps<CategoryType>) => {

                    const { touched, errors } = props;

                    return (
                        <Form autoComplete="off">

                            <CustomInput
                                label="Category name"
                                name="Name"
                                type="text"
                                placeholder="Female salon"
                                className='xl:text-sm text-black'
                            />

                            <FileUpload name="File"
                                className='mt-5'
                                title="Category image"
                                label="Click on this to browse for your image"
                                multiple={false}
                                accept="image/*"
                                error={touched.File && !!errors.File}
                            />

                            {touched.File && errors.File && (
                                <div className="text-red-600 text-xs font-light mt-0 pt-1">{errors.File}</div>
                            )}

                            <Button type='submit' className='bg-black mt-5 py-6 w-full' loading={loading}>
                                Add new category
                            </Button>

                        </Form>
                    );
                }}
            </Formik>

        </PopupModal>
    )
}

export default AddCategory