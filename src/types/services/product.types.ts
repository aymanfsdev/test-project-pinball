export interface ProductDto {
    id: string;
    imageUrl: string;
    itemNumber: string;
    name: string;
    quantity: number;
    itemUnit: string;
    height: number;
    width: number;
    length: number;
    weight: number;
    area: number;
    volym: number;
    itemCost: number;
    sellPrice: number;
    rentPrice: number;
    warehouseId: string;
    productTypeId: string;
    productGroupId: string;
    productCategoryId: string;
}

export interface ProductItemDto {
    id: string;
    itemNumber: string;
    name: string;
    weight: number;
    area: number;
    Value: number;
    Type: string;
    Group: string;
    rentPrice: number;
}
