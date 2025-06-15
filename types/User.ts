export type User = {
    id: string;
    userType: "Vendor" | "Admin" | "User";
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    organizationName: string | null;
    accessToken: string;
    refreshToken: string;
    organizationId: number;
};

export type AuthType = Partial<Pick<User, 'email' | 'phone' | 'firstName' | 'lastName'>> & {
    emailAddress?: string;
    password: string;
    confirmPassword: string;
    channel: number;
    deviceImei: string;
};
