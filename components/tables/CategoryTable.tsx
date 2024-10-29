import React, { useState } from "react";
import { TableHeader, TableHead, Table, TableBody, TableRow, TableCell } from "../ui/table";
import Checkbox from "../Checkbox";
import { useCheckboxSelection } from "@/utils";
import TableDropdown from "./TableDropdown";
// import { categories } from "@/data";
import { Chip, Image } from "@nextui-org/react";
import { ApiResponse, CategoryTypeWithId } from "@/types";
import { DeleteModal, UpdateCategoryModal } from "../modals";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { authFetch } from "@/lib/hooks";

const getStatusStyles = (status: string) => {
    let textColor: string;
    let bgColor: string;

    switch (status) {
        case "active":
            textColor = "text-success-600";
            bgColor = "bg-[#F8FCF9]";
            break;
        case "inactive":
            textColor = "text-error-400";
            bgColor = "bg-[#FEEAEA]";
            break;
        default:
            textColor = "text-gray-500";
            bgColor = "bg-gray-200";
            break;
    }

    return { textColor, bgColor };
};

const CategoryTable = ({ categories, getCategories, update }: { categories: CategoryTypeWithId[], getCategories: () => void, update: (session: any) => void }) => {

    const router = useRouter()

    // UPDATE DATA STATE
    const [editData, setEditData] = useState({})
    const [openEditModal, setOpenEditModal] = useState<boolean>(false)

    // DETE STATE
    const [open, setOpen] = useState<boolean>(false)
    const [deleteId, setDeleteId] = useState<number | string | null>(null);


    const {
        selectedIds,
        selectAllChecked,
        handleCheckboxChange,
        handleSelectAllChange,
    } = useCheckboxSelection(categories);

    const menuItems = [
        {
            showDivider: true,
            items: [
                {
                    key: 'view',
                    label: 'View category',
                    onClick: (category: CategoryTypeWithId) => router.push(`category/${category.id}`),
                },
                {
                    key: 'edit',
                    label: 'Edit category',
                    onClick: (category: CategoryTypeWithId) => {
                        setEditData(category);
                        setOpenEditModal(true);
                    },
                },
            ],
        },
        {
            showDivider: false,
            items: [
                {
                    key: 'delete',
                    label: 'Delete category',
                    className: 'text-error-500',
                    color: 'danger',
                    description: 'Permanently delete the category',
                    onClick: (category: CategoryTypeWithId) => {
                        if (category.id !== undefined) {
                            setDeleteId(category.id);
                            setOpen(true)
                        }
                    }
                },
            ],
        },
    ];

    const handleDelete = async () => {
        if (deleteId !== null) {
            try {
                const response = await authFetch<ApiResponse>(`/business-category/id?id=${deleteId}`, update, 'DELETE');
                toast.success(response?.result.message || 'Category successfully deleted');
                getCategories();
            } catch (error: any) {
                toast.error(error.errorMessage);
            } finally {
                setDeleteId(null);
                setOpen(false); 
            }
        }
    };

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
                            Category
                        </TableHead>

                        <TableHead className="px-6">
                            Number of vendors
                        </TableHead>

                        <TableHead className="pl-6">
                            Number of services
                        </TableHead>

                        <TableHead className="pl-6">
                            Status
                        </TableHead>

                    </TableRow>

                </TableHeader>

                <TableBody>

                    {categories.map((item, index) => (

                        <TableRow className="text-xs text-black" key={item.id}>

                            <TableCell className="px-2">
                                <Checkbox
                                    id={`category-${item.id}`}
                                    checked={selectedIds.includes(item.id)}
                                    onChange={() => handleCheckboxChange(item.id)}
                                    label={`Select ${item.name}`}
                                />
                            </TableCell>

                            <TableCell className="pl-2 pr-6">

                                <div className="flex items-center gap-3 pr-6">

                                    <Image alt={item.name} width={200}
                                        className="rounded-full object-cover w-9 h-9 max-w-10 max-h-10"
                                        src={item.imageUrl} />

                                    <p className="whitespace-nowrap"> {item.name}</p>

                                </div>

                            </TableCell>

                            <TableCell className="px-6">
                                {item.vendors || 0}
                            </TableCell>

                            <TableCell className="px-6">
                                {item.services || 0}
                            </TableCell>

                            <TableCell className="pl-6">
                                <Chip className={`text-[12px] font-light ${getStatusStyles(item.status || 'active').bgColor} ${getStatusStyles(item.status || 'active').textColor}`}>
                                    {item.status != 'active' ? 'Active' : 'Coming soon'}
                                </Chip>
                            </TableCell>

                            <TableCell>
                                <TableDropdown menuItems={menuItems} category={item} />
                            </TableCell>

                        </TableRow >

                    ))}

                </TableBody >

            </Table>

            <UpdateCategoryModal update={update} getCategories={getCategories} data={editData} open={openEditModal} setOpen={setOpenEditModal} />

            <DeleteModal onDelete={handleDelete} title="category" open={open} setOpen={setOpen} />

        </>
    );
};

export default CategoryTable;
