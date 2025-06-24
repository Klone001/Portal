export interface ActivityType {
    id: string;
    title: string
    desc: string
    type: 'registration' | 'booking' | 'dispute'
    timestamp: string
}

export type OverviewType = {
    title: string
    value: number
    isCurrency?: boolean
    trend: 'up' | 'down'
    percentage: string
    description: string
    hasBorder?: boolean
}

export type FinanceTrxType = {
    user: {
        name: string,
        image: string
    },
    vendor: {
        name: string,
        image: string
    },
    desc: string
    date: string
}