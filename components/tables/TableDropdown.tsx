import { Dropdown, DropdownTrigger, DropdownMenu, DropdownSection, DropdownItem, Button } from "@nextui-org/react";
import { EllipsisVerticalIcon } from "@heroicons/react/24/solid";
import { CategoryType } from "@/types";

interface DropdownItemProps {
    key: string;
    label: string;
    className?: string;
    color?: string;
    description?: string;
    onClick: (category: CategoryType) => void;
}

interface DropdownSectionProps {
    showDivider: boolean;
    items: DropdownItemProps[];
}

interface TableDropdownProps {
    menuItems: DropdownSectionProps[];
    category: CategoryType;
}

const TableDropdown: React.FC<TableDropdownProps> = ({ menuItems, category }) => {
    const updatedMenuItems = menuItems.map(section => ({
        ...section,
        items: section.items.map(item => ({
            ...item,
            onClick: () => item.onClick(category), 
        }))
    }));

    return (
        <Dropdown>
            <DropdownTrigger>
                <Button isIconOnly radius="full" variant="light">
                    <EllipsisVerticalIcon className="size-5 text-[#1C1B1F]" />
                </Button>
            </DropdownTrigger>

            <DropdownMenu variant="faded">
                {updatedMenuItems.map((section, index) => (
                    <DropdownSection key={index} showDivider={section.showDivider}>
                        {section.items.map((item) => (
                            <DropdownItem
                                key={item.key}
                                className={item.className || ''}
                                description={item.description || ''}
                                onClick={item.onClick}>
                                {item.label}
                            </DropdownItem>
                        ))}
                    </DropdownSection>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default TableDropdown;
