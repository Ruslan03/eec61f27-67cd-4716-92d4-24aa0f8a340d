export type Employee = {
  id: number;
  first_name: string;
  last_name: string;
  email: string;
  phone: string;
  position: string;
  created_at: Date | string;
};

export type EmployeeListParams = {
  position?: string;
};
