export type CategoryType = {
    id?:  number;
    name?: string;
    File?: File | null;
    vendors?: number;
    services?: number;
    imageUrl?: string;
    status?: 'active' | 'inactive';

    BusinessCategoryId?: number | null;
    subService?: number;
}


export type CategoryTypeWithId = Required<Pick<CategoryType, 'id'>> & CategoryType;
