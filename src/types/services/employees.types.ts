import { INationality } from "./nationalities.types";

export interface IClothingType {
  id: number;
  name: string;
}

export interface IClothingInfo {
  id: string;
  size: string;
  type: IClothingType;
}

export interface EmployeeDto {
  accomodations: any[];
  address: string;
  bankAccountNumber: string;
  bankCode: string;
  city: string;
  clothings: IClothingInfo[];
  contractNumber: string;
  country: string;
  drivingLicense: { id: string; name: string };
  email: string;
  employeeRole: { id: string; name: string };
  employmentTerm: any;
  employmentType: any;
  endDate: string;
  equipments: any[];
  id: string;
  inactivatedDate: string | null;
  isActive: boolean;
  nationality: INationality;
  otherInfo: string;
  personalIdentificationNumber: string;
  phone: string;
  postalCode: string;
  profileUrl: string | null;
  regDate: string;
  salary: number;
  socialSecurityNumber: string;
  startDate: string;
  timesheets: any[];
  workActions: any[];
  workingWeek: any;
  firstName: string;
  lastName: string;
  seqNumber: string;
}

export interface WorkActionSummary {
  id: string;
  totDays: number;
  totHours: number;
  workAction: {
    id: string;
    name: string;
    code: string;
  };
}

export interface EmployeeSummaryDto {
  id: string;
  year: number;
  month: number;
  totDays: number;
  totHours: number;
  totHoursByContract: number;
  workActionSummary: WorkActionSummary[];
}

export interface EmployeeTableDto {
  address: string;
  // email: string;
  id: string;
  Status?: boolean;
  // phone: string;
  // firstName: string;
  // lastName: string;
  name: string;
  seqNumber: string;
  contractNumber: string;
}

export interface LoginRes {
  token: string;
  expiration: number;
}

export interface ForgotPasswordInfo {
  username: string;
}

export interface IChangePassword {
  username: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface IResetPassword {
  username: string;
  newPassword: string;
  confirmNewPassword: string;
  token: string;
}

export interface IEmployee {
  "Sutarties Nr.": number;
  "Grafiko Nr.": string;
  "Vardas Pavardė": string;
  Pareigos: string;
  Statusas: string;
}

export interface ICreateEmployeeRole {
  name: string;
}

export interface IEmployeeRole extends ICreateEmployeeRole {
  id: string;
}

export interface IEmploymentTypeInfo extends IEmployeeRole {
  multiplyer: number;
}
