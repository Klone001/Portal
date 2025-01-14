import {
    Dropdown,
    DropdownTrigger,
    DropdownMenu,
    DropdownSection,
    DropdownItem,
} from "@nextui-org/react";

interface DropdownItemProps<T> {
    key: string;
    label: string;
    className?: string;
    description?: string;
    onClick?: (item: T) => void;
}

interface DropdownSectionProps<T> {
    showDivider?: boolean;
    items: DropdownItemProps<T>[];
}

interface CustomDropdownProps<T> {
    menuItems: DropdownSectionProps<T>[];
    item: T;
    trigger: React.ReactNode; 
}

const CustomDropdown = <T,>({ menuItems, item, trigger }: CustomDropdownProps<T>) => {

    const updatedMenuItems = menuItems.map((section) => ({
        ...section,
        items: section.items.map((dropdownItem) => ({
            ...dropdownItem,
            onClick: dropdownItem.onClick ? () => dropdownItem.onClick?.(item) : undefined,
        })),
    }));

    return (
        <Dropdown>
            <DropdownTrigger>{trigger}</DropdownTrigger>
            <DropdownMenu variant="faded">
                {updatedMenuItems.map((section, index) => (
                    <DropdownSection key={index} showDivider={section.showDivider}>
                        {section.items.map((dropdownItem) => (
                            <DropdownItem
                                key={dropdownItem.key}
                                className={dropdownItem.className || ''}
                                description={dropdownItem.description || ""}
                                onClick={dropdownItem.onClick}>
                                {dropdownItem.label}
                            </DropdownItem>
                        ))}
                    </DropdownSection>
                ))}
            </DropdownMenu>
        </Dropdown>
    );
};

export default CustomDropdown;
