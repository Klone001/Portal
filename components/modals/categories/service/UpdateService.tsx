import { CustomInput } from '@/components/FormElements';
import { FileUpload } from '@/components';
import { Button, PopupModal } from '@/components/ui'
import { updateServiceSchema } from '@/utils/schema';
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import { Form, Formik, FormikProps } from 'formik';
import React, { useState } from 'react'
import { ApiResponse, CategoryType } from '@/types';
import { authFetch } from '@/lib/hooks';
import toast from 'react-hot-toast';

const UpdateServiceModal: React.FC<{ getServices: () => void, categoryId: number; open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>>; data: CategoryType | null; }> = ({ open, setOpen, categoryId, data, getServices }) => {

    const [loading, setLoading] = useState(false)

    const initialValues: CategoryType = {
        id: data?.id,
        name: data?.name || '',
        BusinessCategoryId: categoryId || null,
        File: null
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

                <h2 className="text-black text-sm md:text-base font-medium">Edit service details</h2>

            </div>

            <Formik
                initialValues={initialValues}
                validationSchema={updateServiceSchema}
                onSubmit={async (values: CategoryType) => {

                    setLoading(true);

                    const formData = new FormData()

                    if (values.id !== undefined) {
                        formData.append('id', values.id.toString());
                    }
                    formData.append('name', values.name as string)
                    formData.append('BusinessCategoryId', values.BusinessCategoryId ? 
                        values.BusinessCategoryId.toString() : '');

                    if (values.File) {
                        formData.append('File', values.File);
                    }

                    try {

                        const response = await authFetch<ApiResponse>('/service-category/update', 'PUT', formData);

                        toast.success(response?.result.message || 'Service category updated successfully')

                        getServices()

                        setOpen(false)

                    } catch (error: any) {
                        toast.error(error.errorMessage);
                    } finally {
                        setLoading(false)
                    }

                }}>
                {(props: FormikProps<CategoryType>) => {

                    const { touched, errors } = props;

                    return (
                        <Form autoComplete="off">

                            <CustomInput
                                label="Service name"
                                name="name"
                                type="text"
                                placeholder=""
                                className='xl:text-sm text-black'
                            />

                            <FileUpload name="File"
                                className='mt-5'
                                title="Service category image"
                                label="Click on this to browse for your image"
                                multiple={false}
                                accept="image/*"
                                imgSrc={data?.imageUrl}
                                error={touched.File && !!errors.File}
                            />

                            {touched.File && errors.File && (
                                <div className="text-red-600 text-xs font-light mt-0 pt-1">{errors.File}</div>
                            )}

                            <Button type='submit' className='bg-black mt-5 py-6 w-full' loading={loading}>
                                Update service category
                            </Button>

                        </Form>
                    );
                }}
            </Formik>

        </PopupModal>
    )
}

export default UpdateServiceModal