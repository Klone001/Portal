'use client';

import { useEffect, useState } from 'react';
import { SearchIcon } from '@/icons';
import { useQueryParams } from '@/utils';

type Props = {
    placeholder?: string;
    keyName?: string;
};

const SearchInput = ({ placeholder = "Search...", keyName = "search" }: Props) => {
    
    const { updateQueryParams } = useQueryParams();
    const [inputValue, setInputValue] = useState('');
    const [debouncedValue, setDebouncedValue] = useState('');

    useEffect(() => {
        const handler = setTimeout(() => {
            setDebouncedValue(inputValue);
        }, 500);

        return () => clearTimeout(handler);
    }, [inputValue]);

    useEffect(() => {
        updateQueryParams({ [keyName]: debouncedValue || null });
    }, [debouncedValue, keyName]);

    return (
        <div className="relative w-full sm:w-auto">
            <div className="absolute top-[8.5px] left-2">
                <SearchIcon fill='#211F1F' className='size-6' />
            </div>
            <input
                type="search"
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="form-control h-10 placeholder:text-gray-600 text-gray-800 text-[12.5px] placeholder:text-[12.5px] pl-9 rounded-lg w-full sm:w-60 md:w-80"
                placeholder={placeholder}
            />
        </div>
    );
};

export default SearchInput;
