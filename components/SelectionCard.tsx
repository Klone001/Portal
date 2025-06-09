import React from 'react';
import Image from 'next/image';

type Props = {
    label: string;
    icon?: React.ReactNode;
    image?: string;
    selected?: boolean;
    disabled?: boolean;
    onSelect?: () => void;
};

const SelectionCard = ({ label, icon, image, selected = false, disabled = false, onSelect }: Props) => {
    return (
        <div onClick={() => {
            if (!disabled && onSelect) onSelect();
        }}
            className={`
            rounded-lg p-4 border transition cursor-pointer
            ${disabled ? 'bg-gray-300 border-gray-200 cursor-not-allowed' : ''}
            ${selected ? 'border-success' : 'border-gray-200'}`}>

            {disabled && (
                <div className="flex justify-end">
                    <span className="inline-flex items-center justify-center bg-[#F8FCF9] py-1.5 text-success px-3 text-[9px] rounded-full">
                        Coming Soon
                    </span>
                </div>
            )}

            <div className={`${disabled && 'opacity-50'}`}>
                {icon ? (
                    icon
                ) : image ? (
                    <Image width={24} height={24} src={image} alt={label} />
                ) : null}
                <h2 className="text-sm pt-2">{label}</h2>
            </div>

        </div>
    );
};

export default SelectionCard;
