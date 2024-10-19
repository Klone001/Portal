import { RefreshIcon } from '@/icons'
import { Button } from '@nextui-org/react'
import React from 'react'

const RefreshButton = () => {
  return (
    <Button startContent={<RefreshIcon className='size-3.5 mb-1' fill='#1C1B1F' />}  radius='full' className='bg-gray-100 text-xs'>
        Refresh
    </Button>
  )
}

export default RefreshButton