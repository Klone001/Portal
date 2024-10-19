export type AuthType = {
    emailAddress?: string;
    password?: string;
    channel?: number;
    deviceImei?: string;
}

export type TestimonyType = {
    name: string,
    comment: string,
    image: string,
}

export type ContactType = {
    name: string;
    email: string;
    message: string;
}