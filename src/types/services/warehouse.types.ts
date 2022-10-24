export interface WarehouseDto {
    address: string;
    city: string;
    country: string;
    email: string;
    id: string;
    name: string;
    phone: string;
    postalCode: string;
    type: string;
    warehousekeeperId: string;
}

export interface WarehouseTableDto {
    address?: string;
    id: string;
    warehousekeeper: string;
    phone: string;
    name: string;
}
