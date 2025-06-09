import { AdjustmentsHorizontalIcon, ArrowUturnLeftIcon } from '@heroicons/react/24/solid'
import { Button } from '@nextui-org/react'
import React, { useState } from 'react'
import CustomDropdown from './ui/CustomDropdown';
import { useQueryParams } from '@/utils';
import { usePathname } from 'next/navigation';
import { DateRangeModal } from './modals';

const FilterButton = () => {

    const [ open, setOpen ] = useState(false)
    const pathname = usePathname();
    const { updateQueryParams, searchParams, clearAllQueryParams } = useQueryParams();

    const filter = searchParams.get('filterBy');

    const isVendorPage = pathname.includes('/dashboard/vendor');

    const baseItems = [
        {
            key: 'status',
            label: 'Status',
            onClick: () => updateQueryParams({ filterBy: 'status' }),
        },
        {
            key: 'location',
            label: 'Location',
            onClick: () => updateQueryParams({ filterBy: 'location' }),
        },
        {
            key: 'last_login',
            label: 'Last Login',
            onClick: () => (
                updateQueryParams({ filterBy: 'last_login' }),
                setOpen(true)
            ),
        },
    ];

    const vendorExtraItems = [
        {
            key: 'rating',
            label: 'Rating',
            onClick: () => updateQueryParams({ filterBy: 'rating' }),
        },
        {
            key: 'service_category',
            label: 'Service Category',
            onClick: () => updateQueryParams({ filterBy: 'service_category' }),
        },
    ];

    const menuItems = [
        {
            items: isVendorPage ? [...baseItems, ...vendorExtraItems] : baseItems,
        },
    ];

    return (
        <>

        <div className="flex items-center gap-2">

            {filter && (
                <Button onPress={() => clearAllQueryParams()} radius='md' isIconOnly className='' variant='bordered'>
                    <ArrowUturnLeftIcon className='size-4' />
                </Button>
            )}

            <CustomDropdown
                menuItems={menuItems}
                item
                trigger={
                    <Button radius='md' isIconOnly className={`${filter ? 'bg-primary' : 'bg-white'} shadow-2xl`}>
                        <AdjustmentsHorizontalIcon className={`size-4 ${filter ? 'text-white' : 'text-black'} `} />
                    </Button>
                }
            />

        </div>

        <DateRangeModal open={open} setOpen={setOpen} />

        </>
    )
}

export default FilterButton