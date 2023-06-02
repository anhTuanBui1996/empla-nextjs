export default class StaffDto {
  FullName!: string;
  Portrait!: Attachments[];
  Gender!: string;
  DateOfBirth!: Date;
  Phone!: string;
  PersonalEmail!: string;
  Collaboratory!: string[];
  Role!: string[];
  WorkingPlace!: string[];
  "Teams (Member)": string[];
  "Teams (Leader)": string[];
  Projects!: string[];
  "Tasks (AssignedTo)": string[];
  "Tasks (Supervisor)": string[];
  ContractType!: string;
  WorkingType!: string;
  WorkingPeriod!: string;
  WorkingStatus!: string;
  StartWorkingDay!: Date;
  MarriageStatus!: string;
  HealthStatus!: string;
}