import { UserIcon, UsersIcon } from '@heroicons/react/24/outline';

export const serviceCategoryData = [
    {
        label: "Tattoo & Piercing",
        icon: "/images/categories/tatoo.png",
        disabled: false,
    },
    {
        label: "Female salon",
        icon: "/images/categories/female.png",
        disabled: false,
    },
    {
        label: "Male salon",
        icon: "/images/categories/male.png",
        disabled: false,
    },
    {
        label: "Spa",
        icon: "/images/categories/spa.png",
        disabled: false,
    },
    {
        label: "Restaurant",
        icon: "/images/categories/rest.png",
        disabled: true,
    },
    {
        label: "Car rentals",
        icon: "/images/categories/car.png",
        disabled: true,
    }
];

export const vendorCount = [
    { label: 'Just me', value: 'Just me', icon: <UserIcon className="size-6" /> },
    { label: '2-5 people', value: '2-5', icon: <UsersIcon className="size-6" /> },
    { label: '6-10 people', value: '6-10', icon: <UsersIcon className="size-6" /> },
    { label: '11+ people', value: '11+', icon: <UsersIcon className="size-6" /> },
];

export const PROFILE_UPDATE_ACTIONS = {
    BUSINESS_DETAILS: 'BusinessDetails',
    BUSINESS_CATEGORIES: 'BusinessCategories',
    TEAM_SIZE: 'TeamSize',
    BUSINESS_LOCATION: 'BusinessLocation',
    BUSINESS_PIN: 'BusinessPin',
    BUSINESS_IMAGES_UPLOAD: 'BusinessImagesUpload',
} as const;