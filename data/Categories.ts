import { CategoryTypeWithId, ServiceTypeWithId } from '@/types';

const categories: CategoryTypeWithId[] = [
    {
        id: 1,
        imageUrl: '/imageUrls/categories/female.png',
        vendors: 305,
        services: 305,
        name: "Female salon",
        status: 'active'
    },
    {
        id: 2,
        imageUrl: '/imageUrls/categories/tatoo.png',
        vendors: 305,
        services: 305,
        name: "Tattoo",
        status: 'active'
    },
    {
        id: 3,
        imageUrl: '/imageUrls/categories/male.png',
        vendors: 305,
        services: 305,
        name: "Male salon",
        status: 'active'
    },
    {
        id: 4,
        imageUrl: '/imageUrls/categories/spa.png',
        vendors: 305,
        services: 305,
        name: "Spa",
        status: 'active'
    },
    {
        id: 5,
        imageUrl: '/imageUrls/categories/rest.png',
        vendors: 305,
        services: 305,
        name: "Restaurant",
        status: 'inactive'
    },
    {
        id: 6,
        imageUrl: '/imageUrls/categories/car.png',
        vendors: 305,
        services: 305,
        name: "Car rentals",
        status: 'inactive'
    },
];

const services: ServiceTypeWithId[] = [
    {
        id: 1,
        subService: 543,
        Name: "Tap out",
        imageUrl: '/imageUrls/categories/tapout.png',
        status: 'active'
    },
    {
        id: 2,
        subService: 543,
        Name: "Tap out",
        imageUrl: '/imageUrls/categories/tapout.png',
        status: 'active'
    },
    {
        id: 3,
        subService: 543,
        Name: "Tap out",
        imageUrl: '/imageUrls/categories/tapout.png',
        status: 'active'
    },
    {
        id: 4,
        subService: 543,
        Name: "Tap out",
        imageUrl: '/imageUrls/categories/tapout.png',
        status: 'active'
    },
    {
        id: 5,
        subService: 543,
        Name: "Tap out",
        imageUrl: '/imageUrls/categories/tapout.png',
        status: 'inactive'
    },
]

export {
    categories,
    services
}