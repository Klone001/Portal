import { Button, PopupModal } from '@/components/ui'
import { ArrowLongLeftIcon } from '@heroicons/react/24/solid';
import Image from 'next/image';
import React, { useState } from 'react'

const DeleteModal: React.FC<{ title: string; open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>>; onDelete: () => void }> = ({ open, setOpen, title, onDelete }) => {

    const [loading, setLoading] = useState(false)

    const handleDelete = async () => {
        setLoading(true);
        await onDelete();
        setLoading(false);
        setOpen(false);
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

            <div className="flex items-center gap-x-3 mb-3">

                <Button onPress={() => setOpen(false)} isIconOnly className='bg-gray-300' size='sm' radius='full'>
                    <ArrowLongLeftIcon className='size-5 text-black' />
                </Button>

                <h2 className="text-black text-sm md:text-base font-medium">Delete {title} </h2>

            </div>

            <div className="">

                <Image src='/images/trash.svg' className='mb-4 w-20' width={65} height={65} alt='Trash' />

                <h2 className="text-black text-lg pb-1.5">Are you sure you want to delete this {title} ?</h2>
                <p className="text-gray-800 text-xs md:text-sm">Deleting this {title} is permanent and cannot be undone</p>

                <div className="space-y-4 mt-8">

                    <Button loading={loading} onPress={handleDelete} className='bg-error-500 text-white h-12 w-full'>Delete {title} </Button>

                    <Button onPress={() => setOpen(false)} variant='bordered' className='border border-primary text-primary h-12 w-full'>Cancel</Button>

                </div>

            </div>

        </PopupModal>
    )
}

export default DeleteModal