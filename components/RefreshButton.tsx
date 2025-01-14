import { RefreshIcon } from '@/icons'
import { Button } from '@nextui-org/react'
import React from 'react'

const RefreshButton = ({ onRefresh } : { onRefresh?: () => void }) => {
  return (
    <Button onPress={onRefresh} startContent={<RefreshIcon className='size-3.5 mb-0.5' fill='#1C1B1F' />}  radius='full' className='bg-gray-100 text-xs h-9' size='sm'>
        Refresh
    </Button>
  )
}

export default RefreshButton