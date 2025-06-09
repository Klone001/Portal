import { CusotmerType } from "./Customer";

export type VendorType = CusotmerType & {
    category: string
};

type Service = {
    name: string;
    image: string;
    available: boolean;
};