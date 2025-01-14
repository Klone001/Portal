import React from 'react'
import RefreshButton from './RefreshButton';
import SearchInput from './SearchInput';
import FilterButton from './FilterButton';
import { Button } from '@nextui-org/react';
import { ArrowUpOnSquareIcon, TrashIcon } from '@heroicons/react/24/outline';
import { MailForwardIcon, UnplugIcon } from '@/icons';

interface ControlBarProps {
    actionButton?: React.ReactNode;
    onRefresh?: () => void,
    placeholder?: string,
    buttons?: Array<'delete' | 'broadcast' | 'export' | 'deactivate'>;
    onDelete?: () => void;
    onDeactivate?: () => void;
    onBroadcast?: () => void;
    onExport?: () => void;
    isDisabled?: boolean;
}

const ControlBar: React.FC<ControlBarProps> = ({ actionButton, onRefresh, placeholder, buttons = [], onDelete, onBroadcast, onDeactivate, onExport, isDisabled }) => {

    return (
        <div className="flex items-center justify-between flex-wrap gap-x-5 gap-y-3 md:flex-nowrap">

            <div className="order-2 md:order-1 flex items-center gap-2 flex-wrap">

                {buttons.includes('delete') && !isDisabled && (
                    <Button onPress={onDelete} size='sm' startContent={<TrashIcon className='text-white w-5 mb-1' />} radius='full' className='bg-error-400 h-9 text-white text-xs'>
                        Delete
                    </Button>
                )}

                <RefreshButton onRefresh={onRefresh} />

                {buttons.includes('deactivate') && !isDisabled && (
                    <Button onPress={onDeactivate} size='sm' startContent={<UnplugIcon className='size-4' />} radius='full' className='bg-gray-100 h-9 text-xs mb-0.5'>
                        Deactivate
                    </Button>
                )}

                {buttons.includes('broadcast') && !isDisabled && (
                    <Button onPress={onBroadcast} size='sm' startContent={<MailForwardIcon className='size-4' />} radius='full' className='bg-gray-100 h-9 text-xs mb-0.5'>
                        Broadcast
                    </Button>
                )}

                {buttons.includes('export') && !isDisabled && (
                    <Button onPress={onExport} size='sm' startContent={<ArrowUpOnSquareIcon className='w-5 mb-1' />} radius='full' className='bg-gray-100 h-9 text-xs'>
                        Export
                    </Button>
                )}

            </div>

            <div className={`flex items-center gap-2 justify-end w-full sm:w-auto order-1 md:order-2 ${actionButton ? 'flex-wrap' : ''}`}>

                <SearchInput placeholder={placeholder} />

                {actionButton && actionButton}

                <FilterButton />

            </div>

        </div>
    )
}

export default ControlBar