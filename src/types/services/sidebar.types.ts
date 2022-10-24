export interface ISidebar {
    id: number;
    link?: string;
    name: string;
    subItems?: SubItem[][];
}

export interface SubItem {
    id: number;
    name: string;
    link?: string;
    icon: string;
    nestedItems?: NestedItem[]
}

export interface NestedItem {
    id: number;
    link?: string;
    name: string
}
