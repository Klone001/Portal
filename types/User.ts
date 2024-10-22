export type AuthType = {
    emailAddress?: string;
    password?: string;
    channel?: number;
    deviceImei?: string;
}

export type User = {
    id: string;
    userType: "Vendor" | "Admin" | "User";
    firstName: string;
    lastName: string;
    organisationName: string | null; 
    accessToken: string;
    refreshToken: string;
    organizationId: number;
};