import { Button, PopupModal } from '@/components/ui'
import React, { useState } from 'react'
import DateSelector from '../DateSelector';
import { useQueryParams } from '@/utils';

const DateRangeModal: React.FC<{
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
    startKey?: string
    endKey?: string
}> = ({ open, setOpen, startKey = "start", endKey = "end" }) => {

    const { updateQueryParams } = useQueryParams()

    const [selectedRange, setSelectedRange] = useState<{ start: Date; end: Date } | null>(null)

    const handleApply = () => {
        if (!selectedRange) return

        updateQueryParams({
            [startKey]: selectedRange.start.toISOString().split('T')[0],
            [endKey]: selectedRange.end.toISOString().split('T')[0],
        })

        setOpen(false)
    }

    return (
        <PopupModal
            size='lg'
            isOpen={open}
            onClose={() => setOpen(false)}
            placement='center'
            className='max-h-[95vh] py-3'>

            <h2 className='text-black text-sm md:text-base font-medium my-5'>Date</h2>

            <DateSelector
                initialDate={new Date()}
                selectionMode="range"
                onDateSelect={(date) => {
                    if ('start' in date && 'end' in date) {
                        setSelectedRange(date)
                    }
                }}
            />

            <div className="flex items-center gap-2 justify-between pt-12">

                <Button onPress={() => setOpen(false)} variant='bordered'>Cancel</Button>

                <Button onPress={handleApply}>Apply</Button>

            </div>

        </PopupModal>
    )
}

export default DateRangeModal