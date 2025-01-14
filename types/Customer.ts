export type CusotmerType = {
    id: number;
    firstName?: string;
    lastName?: string;
    email?: string;
    phone: string; 
    status: string;
    lastLogin: string;
    createdAt: Date;
    userType: "Vendor" | "Admin" | "User";
    profileImage: string;
    location?: string;
};