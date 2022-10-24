export interface ClientsDto {
    name: string;
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
    agreementPrefix: string;
    agreementNumber: string;
    createdOn: string;
    createOnDate: string;
    id: string;
    isActive: boolean;
    paymentTerm: BigInteger;
    agreementTerminationTermId: string;
    customAgreementTerminationTerm: string;
    createdByEmployeeId: string;
    approvedByEmployeeId: string;
    customerId: string;
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

export interface ClientsTableDto {
    id: string | null;
    Title: string | null;
    Code: string | null;
    Vatcode: string | null;
    Address: string | null;
    Phone: string | null;
    Type: string | null;
    Solvency: string | null;
}
