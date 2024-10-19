import React from "react";

interface CheckboxProps {
    id: string;
    checked: boolean;
    onChange: () => void;
    label?: string;
}

const Checkbox: React.FC<CheckboxProps> = ({ id, checked, onChange, label }) => {
    return (
        <label htmlFor={id} className="flex cursor-pointer">

            <input type="checkbox" className="shrink-0 border-gray-600 border rounded text-black pointer-events-none checked:bg-black focus:ring-black h-4 w-4"
                id={id} checked={checked} onChange={onChange} />

            {label && <span className="sr-only">{label}</span>}

        </label>
    );
};

export default Checkbox;
