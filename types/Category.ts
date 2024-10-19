export type CategoryType = {
    id?: string | number;
    image?: string;
    Name?: string;
    File?: File | null;
    vendors?: number;
    services?: number;
    status?: 'active' | 'inactive';
}

export type ServiceType = {
    id?: string | number;
    image?: string;
    File?: File | null;
    BusinessCategoryId?: number | null;
    Name ?: string;
    subService?: number;
    status?: 'active' | 'inactive';
}

export type CategoryTypeWithId = Required<Pick<CategoryType, 'id'>> & CategoryType;
export type ServiceTypeWithId = Required<Pick<ServiceType, 'id'>> & ServiceType;
