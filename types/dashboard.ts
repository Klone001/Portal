export interface ActivityType {
    id: string;
    type: 'registration' | 'booking';
    email: string;
    timestamp: string;
}
