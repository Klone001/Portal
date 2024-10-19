import React from 'react'
import RefreshButton from './RefreshButton';
import SearchInput from './SearchInput';
import FilterButton from './FilterButton';

interface ControlBarProps {
    actionButton?: React.ReactNode;
}

const ControlBar: React.FC<ControlBarProps> = ({ actionButton }) => {

    return (
        <div className="flex items-center justify-between flex-wrap gap-x-5 gap-y-3 md:flex-nowrap">

            <div className="order-2 md:order-1">
                <RefreshButton />
            </div>

            <div className="flex items-center flex-wrap gap-2 justify-end w-full sm:w-auto order-1 md:order-2">

                <SearchInput />

                {actionButton}

                <FilterButton />

            </div>

        </div>
    )
}

export default ControlBar