import React, { useEffect } from 'react'
import { TableHeader, TableHead, Table, TableBody, TableRow, TableCell } from "../ui/table";
import Checkbox from '../Checkbox';
import { useCheckboxSelection } from '@/utils';
import { vendors } from '@/data';
import { Button, Chip, Image } from '@nextui-org/react';
import moment from 'moment';
import CustomDropdown from '../ui/CustomDropdown';
import { EllipsisVerticalIcon } from '@heroicons/react/24/solid';
import { useRouter } from 'next/navigation';

const VendorsTable = ({ onSelectionChange }: { onSelectionChange: (selectedIds: number[]) => void; }) => {

    const router = useRouter()

    const {
        selectedIds,
        selectAllChecked,
        handleCheckboxChange,
        handleSelectAllChange,
    } = useCheckboxSelection(vendors);

    useEffect(() => {
        onSelectionChange(selectedIds);
    }, [selectedIds]);

    const getStatusStyles = (status: string) => {
        let textColor: string;
        let bgColor: string;

        switch (status) {
            case "Active":
                textColor = "text-success-600";
                bgColor = "bg-[#F8FCF9]";
                break;
            // case "Inactive":
            //     textColor = "text-[#ACACAC]";
            //     bgColor = "bg-[#FAFAFA]";
            //     break;
            case "Pending":
                textColor = "text-[#805D04]";
                bgColor = "bg-[#FCFBF8]";
                break;
            default:
                textColor = "text-gray-900";
                bgColor = "bg-gray-300";
                break;
        }
        return { textColor, bgColor };
    };

    const menuItems = [
        {
            items: [
                {
                    key: 'view',
                    label: 'View Profile',
                    onClick: (id: number) => router.push(`vendor/${id}`),
                },
                {
                    key: 'edit',
                    label: 'Finances',
                    onClick: (id: number) => router.push(`vendor/${id}`),
                },
                {
                    key: 'disactivate',
                    label: 'Deactivate business',
                    onClick: (id: number) => router.push(`vendor/${id}`),
                },
                {
                    key: 'disactivate',
                    label: 'Approve verification',
                    onClick: (id: number) => router.push(`vendor/${id}`),
                },
                {
                    key: 'report',
                    label: 'Generate report',
                    onClick: (id: number) => router.push(`vendor/${id}`),
                },
            ],
        }
    ];

    return (
        <>

            <Table>

                <TableHeader>

                    <TableRow>

                        <TableHead className="px-2">
                            <Checkbox
                                id="select-all"
                                checked={selectAllChecked}
                                onChange={handleSelectAllChange}
                                label="Select All"
                            />
                        </TableHead>

                        <TableHead className="pl-2 pr-6">
                            Profile Info
                        </TableHead>

                        <TableHead className="px-6">
                            Email
                        </TableHead>

                        <TableHead className="pl-6">
                            Category
                        </TableHead>

                        <TableHead className="pl-6">
                            Phone Number
                        </TableHead>

                        <TableHead className="pl-6">
                            Status
                        </TableHead>

                        <TableHead className="pl-6">
                            Last Login
                        </TableHead>

                    </TableRow>

                </TableHeader>

                <TableBody>

                    {vendors.map((user, index) => (

                        <TableRow className="text-xs text-black" key={user.id}>

                            <TableCell className="px-2">
                                <Checkbox
                                    id={`category-${user.id}`}
                                    checked={selectedIds.includes(user.id)}
                                    onChange={() => handleCheckboxChange(user.id)}
                                    label={`Select ${user.id}`}
                                />
                            </TableCell>

                            <TableCell className="pl-2 pr-6">

                                <div className="flex items-center gap-3">

                                    <Image radius='full' alt={user.firstName} width={200}
                                        className="rounded-full object-cover w-9 h-9 max-w-10 max-h-10"
                                        src={user.profileImage} />

                                    <p className="whitespace-nowrap"> {user.firstName} {user.lastName} </p>

                                </div>

                            </TableCell>

                            <TableCell className="px-6">
                                {user.email}
                            </TableCell>

                            <TableCell className="px-6">
                                {user.category}
                            </TableCell>

                            <TableCell className="px-6">
                                {user.phone}
                            </TableCell>

                            <TableCell className="pl-6">
                                <Chip className={`text-[12px] font-light ${getStatusStyles(user.status).bgColor} ${getStatusStyles(user.status).textColor}`}>
                                    {user.status}
                                </Chip>
                            </TableCell>


                            <TableCell className="px-6">
                                <div className="flex flex-col text-[12px] text-gray-800">
                                    <p className='tracking-tight -mb-1'> {moment(user.lastLogin).fromNow()} </p>
                                    <p> {moment(user.lastLogin).format('YYYY/MM/DD')}</p>
                                </div>
                            </TableCell>

                            <TableCell>
                                <CustomDropdown
                                    menuItems={menuItems}
                                    item={user.id}
                                    trigger={
                                        <Button isIconOnly radius="full" variant="light">
                                            <EllipsisVerticalIcon className="size-5 text-[#1C1B1F]" />
                                        </Button>
                                    }
                                />
                            </TableCell>

                        </TableRow >

                    ))}

                </TableBody >

            </Table>

        </>
    )
}

export default VendorsTable