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
    { label: 'Just me', icon: <UserIcon className='size-6' /> },
    { label: '2-5 people', icon: <UsersIcon className='size-6' />},
    { label: '6-10 people', icon: <UsersIcon className='size-6' />},
    { label: '11+ people', icon: <UsersIcon className='size-6' />}
];
