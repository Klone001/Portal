import { SearchIcon } from '@/icons';

const SearchInput = () => {

    return (
        <div className="relative w-full sm:w-auto">

            <div className="absolute top-[8.5px] left-2">
                <SearchIcon fill='#211F1F' className='size-6' />
            </div>

            <input type="search" className="form-control h-10 placeholder:text-gray-600 text-gray-800 text-[12.5px] placeholder:text-[12.5px] pl-9 rounded-lg w-full sm:w-60 md:w-80" placeholder="Search by category" />

        </div>
    );
};

export default SearchInput;
