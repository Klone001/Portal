import { AdjustmentsHorizontalIcon } from '@heroicons/react/24/solid'
import { Button } from '@nextui-org/react'
import React from 'react'

const FilterButton = () => {
    return (
        <Button radius='full' isIconOnly className='bg-white shadow-2xl'>
            <AdjustmentsHorizontalIcon className="size-5 text-[#1C1B1F] " />
        </Button>
    )
}

export default FilterButton