import { CategoryTypeWithId, ServiceTypeWithId } from '@/types';

const categories: CategoryTypeWithId[] = [
    {
        id: '1',
        image: '/images/categories/female.png',
        vendors: 305,
        services: 305,
        Name: "Female salon",
        status: 'active'
    },
    {
        id: 2,
        image: '/images/categories/tatoo.png',
        vendors: 305,
        services: 305,
        Name: "Tattoo",
        status: 'active'
    },
    {
        id: 3,
        image: '/images/categories/male.png',
        vendors: 305,
        services: 305,
        Name: "Male salon",
        status: 'active'
    },
    {
        id: 4,
        image: '/images/categories/spa.png',
        vendors: 305,
        services: 305,
        Name: "Spa",
        status: 'active'
    },
    {
        id: 5,
        image: '/images/categories/rest.png',
        vendors: 305,
        services: 305,
        Name: "Restaurant",
        status: 'inactive'
    },
    {
        id: 6,
        image: '/images/categories/car.png',
        vendors: 305,
        services: 305,
        Name: "Car rentals",
        status: 'inactive'
    },
];

const services: ServiceTypeWithId[] = [
    {
        id: 1,
        subService: 543,
        Name: "Tap out",
        image: '/images/categories/tapout.png',
        status: 'active'
    },
    {
        id: 2,
        subService: 543,
        Name: "Tap out",
        image: '/images/categories/tapout.png',
        status: 'active'
    },
    {
        id: 3,
        subService: 543,
        Name: "Tap out",
        image: '/images/categories/tapout.png',
        status: 'active'
    },
    {
        id: 4,
        subService: 543,
        Name: "Tap out",
        image: '/images/categories/tapout.png',
        status: 'active'
    },
    {
        id: 5,
        subService: 543,
        Name: "Tap out",
        image: '/images/categories/tapout.png',
        status: 'inactive'
    },
]

export {
    categories,
    services
}