import React, {
  AllHTMLAttributes,
  ButtonHTMLAttributes,
  DOMAttributes,
  ReactNode,
} from 'react';

export interface CommonProps<T> extends AllHTMLAttributes<DOMAttributes<T>> { }

import { Color, SelectData, ValueType } from '.';
import { EmployeeTableDto } from './services/employees.types';
import { ProductTypeDto } from './services/producttype.type';
import { ClientsTableDto } from './services/clients.type';
import { ProductGroupTableDto } from './services/productgroup.type';
import { ProductCategoryTableDto } from './services/productcategory.type';
import { WarehouseTableDto } from './services/warehouse.types';
import { ProductItemDto } from './services/product.types';
import { IModal, ModalSubItem } from './services/modal.types';
import { ISidebar, NestedItem, SubItem } from './services/sidebar.types';

/**
 * input props that will be shared to all input components
 */
export interface CommonInputProps<T> extends CommonProps<T> {
  handleChange: (_e: ValueType) => void;
  name: string;
  value?: string | number;
  options?: SelectData[];
}

export interface HeadingProps {
  text: string;
  color?: string;
  className?: string;
  weight?: string;
}

export interface InputProps<T> extends CommonInputProps<T> {
  defaultValue?: string;
  type?: string;
  readonly?: boolean;
  // handleChange?: (_e: ValueType) => void;
  value?: string | number;
  name: string;
  full?: boolean;
  padding?: string;
  fcolor?: Color;
  bcolor?: Color;
  pcolor?: Color;
  width?: string | number;
  className?: string;
  bgStyles?: boolean;
  inputColor?: string;
  required?: boolean;
  reference?: React.LegacyRef<HTMLInputElement>;
}

export interface ButtonProps<T> extends ButtonHTMLAttributes<DOMAttributes<T>> {
  children: ReactNode;
  disabled?: boolean;
  full?: boolean;
  icon?: IconNames;
  color?: Color;
  className?: string;
  isLoading?: boolean;
  onClick?: () => void;
}

export interface TableActionsType<T> {
  name: string;
  icon: IconNames;
  handleAction: (_data: T) => void;
}

export interface CheckboxProps<T> {
  title: string;
  className?: string;
  onClick?: () => void;
}

export type IconNames =
  | 'print'
  | 'add'
  | 'home'
  | 'arrow-right'
  | 'arrow-right2'
  | 'arrow-left'
  | 'filter'
  | 'more'
  | 'arrow-up-black'
  | 'arrow-down-dark'
  | 'menu'
  | 'plus'
  | 'minus'
  | 'message'
  | 'notification'
  | 'departure'
  | 'returning'
  | 'copy'
  | 'add-deactive'
  | 'order-save'
  | 'add-input'
  | 'setting'
  | 'setting-btn'
  | 'doc'
  | 'save';

export interface ListItemProps {
  item: ISidebar;
  toogleDropper: (listId: number) => void;
  open: boolean;
}

export interface ListSubItemProps {
  items: SubItem[];
}

export interface ListSubNestedItemProps {
  item: NestedItem;
}

export interface NavProps {
  collapse: boolean;
  setCollapse: (_x: boolean) => void;
}

export interface ContentItemProps {
  item: IModal;
  handChange: (_e: ValueType) => void;
}

export interface ContentSubHolderProps {
  items: ModalSubItem[];
  handleChange: (_e: ValueType) => void;
}

export interface ModalProps {
  show?: boolean;
  isShow?: boolean;
  className?: string;
  setShow: (_val: boolean) => void;
  setPrintShow?: (_val: boolean) => void;
  onHide: () => void;
}

export interface PrintModalProps {
  show?: boolean;
  isShow?: boolean;
  className?: string;
  setShow: (_val: boolean) => void;
  setPrintShow: (_val: boolean) => void;
  onHide: () => void;
}

export interface ICreateEmployee {
  profileUrl: string;
  firstName: string;
  lastName: string;
  seqNumber: string;
  contractNumber: string;
  socialSecurityNumber: string;
  nationalityId: string;
  personalIdentificationNumber: string;
  employeeRoleId: string;
  employmentTypeId: string;
  employmentTermId: string;
  workingWeekId: string;
  salary: number;
  startDate: string;
  endDate: string;
  regDate: string;
  phone: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  bankCode: string;
  bankAccountNumber: string;
  drivingLicenseId: string;
  otherInfo: string;
  clothingIds: any;
}

export interface ICreateWarehouse {
  name: string;
  address: string;
  postalcode: string;
  city: string;
  country: string;
  email: string;
  phone: string;
  warehousekeeperId: string;
}

export interface ICreateProduct {
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

export interface ICreateProducttype {
  imageUrl: string;
  name: string;
  id: string;
  description: string;
}

export interface ICreateProductGroup {
  imageUrl: string;
  name: string;
  productTypeId: string;
}

export interface ICreateProductCategory {
  imageUrl: string;
  name: string;
  productGroupId: string;
}
export interface ICreateWarehouseProduct {
  id: string,
  warehouseId: string;
  productId: string;
  quantity: string;
}
export interface ICreateClient {
  companyName: string;
  companyNumber: string;
  vatNumber: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  phone: string;
  email: string;
  website: string;
  payee: string;
  bankName: string;
  bankCode: string;
  bankAccount: string;
  companyManagerFirstName: string;
  companyManagerLastName: string;
  companyManagerEmail: string;
  companyManagerPhone: string;
  id: string;
  isActive: boolean;
  customerNumber: string;
  paymentMethodId: string;
  maxCredit: number;
  creditTerm: number;
  creditValue: number;
  customerTypeId: string;
  customerStatusId: string;
  customerCategoryId: string;
  customerSolvencyId: string;
  margin: number;
  discount: number;
  agreements: CustomerAgreement[];
  contacts: CustomerContact[];
}

export interface CustomerAgreement {
  agreementPrefix: string | null;
  agreementNumber: string | null;
  createdOn: string | null;
  createdOnDate: string | null;
  postalCode: string | null;
  id: string | null;
  isActive: boolean;
  paymentTerm: BigInteger;
  agreementTerminationTermId: string | null;
  customAgreementTerminationTerm: string | null;
  createdByEmployeeId: string | null;
  approvedByEmployeeId: string | null;
  customerId: string | null;
}

export interface CustomerContact {
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  email: string | null;
  note: string | null;
  id: string | null;
  isActive: boolean;
  position: BigInteger;
  customerId: string | null;
}

export interface IUpdateEmployee extends ICreateEmployee {
  id: string;
}

export interface IUpdateWarehouse extends ICreateWarehouse {
  id: string;
}

export interface IUpdateProduct extends ICreateProduct {
  id: string;
}

export interface IUpdateProductType extends ICreateProducttype {
  id: string;
}

export interface IUpdateProductGroup extends ICreateProductGroup {
  id: string;
}

export interface IUpdateProductCategory extends ICreateProductCategory {
  id: string;
}

export interface IUpdateClients extends ICreateClient {
  id: string;
}

export interface EmployeeTableProps {
  handleClickRow: (_row: EmployeeTableDto) => void;
  data: EmployeeTableDto[];
  uniqueCol: keyof EmployeeTableDto;
  hide: (keyof EmployeeTableDto)[];
  rowsPerPage?: number;
  totalPages?: number;
  actions: TableActionsType<EmployeeTableDto>[];
  onChangePage: (_page: number) => {};
}

export interface WarehouseTableProps {
  handleClickRow: (_row: WarehouseTableDto) => void;
  data: WarehouseTableDto[];
  uniqueCol: keyof WarehouseTableDto;
  hide: (keyof WarehouseTableDto)[];
  rowsPerPage?: number;
  totalPages?: number;
  actions: TableActionsType<WarehouseTableDto>[];
  onChangePage: (_page: number) => {};
}

export interface ProductItemTableProps {
  handleClickRow: (_row: ProductItemDto) => void;
  data: any[];
  uniqueCol: keyof ProductItemDto;
  hide: (keyof ProductItemDto)[];
  rowsPerPage?: number;
  totalPages?: number;
  actions: TableActionsType<ProductItemDto>[];
  onChangePage: (_page: number) => {};
}

export interface ProductTypeTableProps {
  handleClickRow: (_row: ProductTypeDto) => void;
  data: ProductTypeDto[];
  uniqueCol: keyof ProductTypeDto;
  hide: (keyof ProductTypeDto)[];
  rowsPerPage?: number;
  totalPages?: number;
  actions: TableActionsType<ProductTypeDto>[];
  onChangePage: (_page: number) => {};
}
export interface TestTableProps {
  handleClickRow?: (_row: any) => void;
  onClickPrintwButton?: (_printData: any) => void;
  data: any[];
  subdata?: any[];
  uniqueCol: any;
  hide?: (keyof any)[];
  rowsPerPage?: number | string;
  totalPages?: number | string;
  actions?: TableActionsType<any>[];
  onChangePage: (_page: number) => {};
}

export interface ClientsTableProps {
  handleClickRow: (_row: ClientsTableDto) => void;
  data: ClientsTableDto[];
  uniqueCol: keyof ClientsTableDto;
  hide: (keyof ClientsTableDto)[];
  rowsPerPage?: number;
  totalPages?: number;
  actions: TableActionsType<ClientsTableDto>[];
  onChangePage: (_page: number) => {};
}

export interface ProductGroupTableProps {
  handleClickRow: (_row: ProductGroupTableDto) => void;
  data: ProductGroupTableDto[];
  uniqueCol: keyof ProductGroupTableDto;
  hide: (keyof ProductGroupTableDto)[];
  rowsPerPage?: number;
  totalPages?: number;
  actions: TableActionsType<ProductGroupTableDto>[];
  onChangePage: (_page: number) => {};
}

export interface ProductCategoryTableProps {
  handleClickRow: (_row: ProductCategoryTableDto) => void;
  data: ProductCategoryTableDto[];
  uniqueCol: keyof ProductCategoryTableDto;
  hide: (keyof ProductCategoryTableDto)[];
  rowsPerPage?: number;
  totalPages?: number;
  actions: TableActionsType<ProductCategoryTableDto>[];
  onChangePage: (_page: number) => {};
}

//common input props that will be used on all reusable input components
export interface commonInputProps {
  required?: boolean;
  handleChange: (_e: ValueType) => any;
  name: string;
  options: SelectData[];
  className?: string;
  placeholder?: string;
  disabled?: boolean;
}

export interface WarehouseHistoryTableProps {
  handleClickRow: (_row: any) => void;
  data: any[];
  subdata?: any[];
  uniqueCol: keyof any;
  hide: (keyof any)[];
  rowsPerPage?: number | string;
  totalPages?: number | string;
  actions: TableActionsType<any>[];
  onChangePage: (_page: number) => {};
}
export interface DismissEmployeeTableProps {
  handleClickRow?: (_row: any) => void;
  data: any[];
  subdata?: any[];
  uniqueCol: keyof any;
  hide: (keyof any)[];
  rowsPerPage?: number | string;
  totalPages?: number | string;
  actions?: TableActionsType<any>[];
  onChangePage: (_page: number) => {};
}

export interface SelectProps extends commonInputProps {
  isMulti?: boolean;
  getOptionLabel?: (_option: Object) => string;
  getOptionValue?: (_option: Object) => string;
  noOptionsMessage?: string;
  width?: string;
  searchable?: boolean;
  defaultValue?: SelectData;
  styles?: Object;
  hasError?: boolean;
  height?: number;
  padding?: number;
  bgColor?: string;
  loading?: boolean;
  value?: string | string[] | null;
}
export interface SwitchProps<T> {
  checked: boolean;
  title: string;
  className?: string;
  onClick?: () => void;
}

export interface IFilterType<T> {
  column: keyof T;
  filter: string;
  filterType:
  | 'equals'
  | 'contains'
  | 'startsWith'
  | 'endsWith'
  | 'lessThan'
  | 'greaterThan';
}
export interface IFilterTypeDate<T> {
  column: keyof T;
  filter: string;
  filterType:
  | 'Lithuania'
  | 'Ukraine'
}

export type filterType =
  | 'equals'
  | 'contains'
  | 'startsWith'
  | 'endsWith'
  | 'lessThan'
  | 'greaterThan';


