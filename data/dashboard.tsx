import { FinanceTrxType, OverviewType } from "@/types";

export const financeTrxData: FinanceTrxType[] = [
    {
        user: {
            name: 'Kems',
            image: '/images/finance/1.png'
        },
        vendor: {
            name: 'Soso salon',
            image: '/images/finance/2.png'
        },
        desc: 'just sent N50,000 for a single appointment to',
        date: 'Today 06:06 AM',
    },
    {
        user: {
            name: 'Soso salon',
            image: '/images/finance/2.png'
        },
        vendor: {
            name: 'Klone',
            image: '/images/finance/3.png'
        },
        desc: 'just made payment to',
        date: 'Today 06:06 AM',
    },
    {
        user: {
            name: 'Kems',
            image: '/images/finance/1.png'
        },
        vendor: {
            name: 'Soso salon',
            image: '/images/finance/2.png'
        },
        desc: 'just sent N50,000 for a single appointment to',
        date: 'Today 06:06 AM',
    },
    {
        user: {
            name: 'Soso salon',
            image: '/images/finance/2.png'
        },
        vendor: {
            name: 'Klone',
            image: '/images/finance/3.png'
        },
        desc: 'just made payment to',
        date: 'Today 06:06 AM',
    },
    {
        user: {
            name: 'Kems',
            image: '/images/finance/1.png'
        },
        vendor: {
            name: 'Soso salon',
            image: '/images/finance/2.png'
        },
        desc: 'just sent N50,000 for a single appointment to',
        date: 'Today 06:06 AM',
    },
    {
        user: {
            name: 'Soso salon',
            image: '/images/finance/2.png'
        },
        vendor: {
            name: 'Klone',
            image: '/images/finance/3.png'
        },
        desc: 'just made payment to',
        date: 'Today 06:06 AM',
    },
    {
        user: {
            name: 'Kems',
            image: '/images/finance/1.png'
        },
        vendor: {
            name: 'Soso salon',
            image: '/images/finance/2.png'
        },
        desc: 'just sent N50,000 for a single appointment to',
        date: 'Today 06:06 AM',
    },
    {
        user: {
            name: 'Soso salon',
            image: '/images/finance/2.png'
        },
        vendor: {
            name: 'Klone',
            image: '/images/finance/3.png'
        },
        desc: 'just made payment to',
        date: 'Today 06:06 AM',
    },
]

export const overviewSalesData: OverviewType[] = [
    {
        title: 'Total Sales',
        value: 560000,
        isCurrency: true,
        trend: 'up',
        percentage: '2.15',
        description: 'Higher than last month',
        hasBorder: true,
    },
    {
        title: 'Total Vendors',
        value: 60452,
        trend: 'down',
        percentage: '0.15',
        description: 'Lesser than last month',
        hasBorder: true,
    },
    {
        title: 'Total Books',
        value: 320134,
        trend: 'up',
        percentage: '5.15',
        description: 'Higher than last month',
        hasBorder: false,
    },
];

export const overviewRevenueData: OverviewType[] = [
    {
        title: 'Total Revenue',
        value: 560000,
        isCurrency: true,
        trend: 'up',
        percentage: '2.15',
        description: 'Higher than last month',
        hasBorder: true,
    },
    {
        title: 'Revenue by Vendors',
        value: 60452,
        trend: 'down',
        percentage: '0.15',
        description: 'Lesser than last month',
        hasBorder: true,
    },
    {
        title: 'Revenue by Individuals',
        value: 320134,
        trend: 'up',
        percentage: '5.15',
        description: 'Higher than last month',
        hasBorder: false,
    },
];
