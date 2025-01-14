import { AddBusinessIcon } from '@/icons';
import { Chip } from '@nextui-org/react';
import React from 'react'

const AccountInfomation = ({ role }: { role: string }) => {

    const getStatusStyles = (status: string) => {
        let textColor: string;
        let bgColor: string;

        switch (status) {
            case "Active":
                textColor = "text-success-600";
                bgColor = "bg-[#F8FCF9]";
                break;
            case "Inactive":
                textColor = "text-error-400";
                bgColor = "bg-[#FEEAEA]";
                break;
            default:
                textColor = "text-gray-900";
                bgColor = "bg-gray-300";
                break;
        }
        return { textColor, bgColor };
    };

    return (
        <div className="bg-white rounded-lg p-5 shadow-dashShadow">

            <div className="pb-3 flex justify-between items-center gap-5">
                <h2 className="text-off-black text-sm font-medium leading-tight">Account status</h2>
                <Chip className={`text-[12px] font-light ${getStatusStyles('Active').bgColor} ${getStatusStyles('Active').textColor}`}>
                    Active
                </Chip>
            </div>

            <div className="pb-3 flex justify-between items-center gap-5">
                <h2 className="text-off-black text-sm font-medium leading-tight">Start date</h2>
                <p className="text-xs text-gray-800 text-left">15 Aug, 2024</p>
            </div>

            <div className="py-3 flex justify-between items-center gap-5">
                <h2 className="text-off-black text-sm font-medium leading-tight">Profile type</h2>
                <p className="text-xs text-gray-800 text-left">User</p>
            </div>

            <div className="pt-3 flex justify-between items-center gap-5">
                <h2 className="text-off-black text-sm font-medium leading-tight">Report history</h2>
                <p className="text-xs text-blue underline underline-offset-2 text-left">1 report</p>
            </div>

            {role === 'user' && (
                <div className="border-t border-gray-75 pt-5 mt-5">

                    <div className="p-3 border rounded-lg border-gray-300 flex items-center gap-x-4 cursor-pointer">

                        <div className="border-2 p-3 border-accent-200 rounded-lg bg-accent-50 flex items-center justify-center">
                            <AddBusinessIcon className='size-7' />
                        </div>

                        <div className="inline-flex flex-col gap-0 5">
                            <h2 className="text-black text-sm 2xl:text-base font-medium leading-tight">Become a vendor</h2>
                            <p className="text-gray-700 text-[12px] 2xl:text-xs font-normal leading-4">
                                Create a vendor account for this user
                            </p>
                        </div>

                    </div>

                </div>
            )}

        </div>
    )
}

export default AccountInfomation