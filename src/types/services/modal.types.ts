export interface IModal {
  name: string;
  id: number;
  subItems?: ModalSubItem[];
}

export interface ModalSubItem {
  id: number;
  name: string;
  icon?: string;
}
