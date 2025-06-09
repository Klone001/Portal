import SideDrawer from '@/components/ui/SideDrawer'
import { financeTrxData } from '@/data';
import { ArrowLeftIcon } from '@heroicons/react/24/solid';
import { Button } from '@nextui-org/react';
import React from 'react'
import FinanceTransactionList from './FinanceTransactionList';

const FinanceTransactionsDrawer: React.FC<{ open: boolean; setOpen: React.Dispatch<React.SetStateAction<boolean>> }> = ({ open, setOpen }) => {
    return (
        <SideDrawer
            isOpen={open}
            onClose={() => setOpen(false)}
            hideCloseButton>

            <div className="flex items-center gap-3">

                <Button onPress={() => setOpen(false)} size='sm' radius='full' isIconOnly className='bg-gray-200'>
                    <ArrowLeftIcon className='size-4' />
                </Button>

                <h5 className="text-sm 2xl:text-base text-black"> Transactions </h5>

            </div>

            <div className="divide-y divide-gray-400 pt-4">

                {financeTrxData.map((item, index) => (
                    <FinanceTransactionList key={index} trx={item} />
                ))}

            </div>


        </SideDrawer>
    )
}

export default FinanceTransactionsDrawer