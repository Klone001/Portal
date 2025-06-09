export type AuthType = {
    email?: string;
    emailAddress?: string;
    lastName?: string;
    firstName?: string;
    password?: string;
    channel?: number;
    deviceImei?: string;
    confirmPassword?: string;
    phone?: string;
}

export type User = {
    id: string;
    userType: "Vendor" | "Admin" | "User";
    firstName: string;
    lastName: string;
    email?: string;
    organisationName: string | null;
    accessToken: string;
    refreshToken: string;
    organizationId: number;
};