export type WorkAction = {
  id: string;
  name: string;
  code: string;
  start: string;
  end: string;
  country: {
    id: string;
    name: string;
    color: string;
  };
};

export type TimeSheet = {
  id: string;
  year: number;
  month: number;
  day: number;
  weekDay: number;
  hours: number;
  workAction: {
    id: string;
    name: string;
    code: string;
  };
};

export type WorkActionSummary = {
  id: string;
  totDays: number;
  totHours: number;
  workAction: {
    id: string;
    name: string;
    code: string;
  };
};

export type Summary = {
  id: string;
  year: number;
  month: number;
  totDays: number;
  totHours: number;
  totHoursByContract: number;
  workActionSummary: WorkActionSummary[];
};

export type Employee = {
  id: string;
  isActive: boolean;
  profileUrl: string;
  firstName: string;
  lastName: string;
  seqNumber: string;
  contractNumber: string;
  socialSecurityNumber: string;
  nationality: {
    id: string;
    name: string;
    code: string;
  };
  personalIdentificationNumber: string;
  employeeRole: {
    id: string;
    name: string;
  };
  employmentType: {
    id: string;
    name: string;
    multiplyer: number;
  };
  employmentTerm: {
    id: string;
    name: string;
  };
  workingWeek: null;
  salary: number;
  startDate: Date;
  endDate: Date;
  regDate: Date;
  inactivatedDate: Date | null;
  phone: string;
  email: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
  bankCode: string;
  bankAccountNumber: string;
  drivingLicense: {
    id: string;
    name: string;
  };
  otherInfo: string;
  clothings: [
    {
      id: string;
      size: string;
      type: {
        id: string;
        name: string;
      };
    }
  ];
  accomodations: [];
  equipments: [];
  workActions: WorkAction[];
  timeSheets: TimeSheet[];
  summary: null;
};
