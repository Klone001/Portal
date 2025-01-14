import { Button, PopupModal } from '@/components/ui'
import { XMarkIcon } from '@heroicons/react/24/solid';
import SearchInput from '../SearchInput';
import FilterButton from '../FilterButton';
import { TransactionTable } from '../tables';

const TransactionModal: React.FC<{ open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ open, setOpen }) => {

    return (
        <PopupModal
            size='7xl'
            isOpen={open}
            onClose={() => setOpen(false)}
            placement='center'
            backdrops='opaque'
            showCloseButton={false}
            className='max-h-[95vh] py-3'>

            <div className="flex items-center justify-between flex-wrap gap-3 mb-5">

                <div className="flex items-center gap-x-3">

                    <Button onPress={() => setOpen(false)} isIconOnly className='bg-gray-200' size='sm' radius='full'>
                        <XMarkIcon className='size-5 text-black' />
                    </Button>

                    <h2 className="text-black text-sm md:text-base font-medium">Transactions</h2>

                </div>

                <div className='flex items-center gap-2 justify-end w-full sm:w-auto order-1 md:order-2'>

                    <SearchInput placeholder='Search by name, email, phone number' />

                    <FilterButton />

                </div>

            </div>

            <TransactionTable />

        </PopupModal>
    )
}

export default TransactionModal