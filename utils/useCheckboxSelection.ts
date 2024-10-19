'use client'

import { useState } from 'react';

const useCheckboxSelection = (data: { id: number | string }[]) => {
    const [selectedIds, setSelectedIds] = useState<(number | string)[]>([]);
    const [selectAllChecked, setSelectAllChecked] = useState<boolean>(false);

    const handleCheckboxChange = (id: number | string) => {
        setSelectedIds((prevSelectedIds) => {
            const updatedSelectedIds = [...prevSelectedIds];
            const index = updatedSelectedIds.indexOf(id);
            if (index === -1) {
                updatedSelectedIds.push(id);
            } else {
                updatedSelectedIds.splice(index, 1);
            }
            return updatedSelectedIds;
        });
    };

    const handleSelectAllChange = () => {
        if (selectAllChecked) {
            setSelectedIds([]);
        } else {
            const allIds = data.map((item) => item.id);
            setSelectedIds(allIds);
        }
        setSelectAllChecked(!selectAllChecked);
    };

    return {
        selectedIds,
        selectAllChecked,
        handleCheckboxChange,
        handleSelectAllChange,
    };
};

export default useCheckboxSelection;
