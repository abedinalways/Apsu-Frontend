export interface User {
  id: string;
  full_name: string;
  email_address: string;
  actor: string;
  time_in_status: string;
  note: string;
  type: string;
  details: string;
  reason: string;
  changed_by: string;
  enquiry_type: string;
  mobile_number: string;
  createdAt: string;
  time: string;
  additional_information: string;
  status: string;
}

export interface UsersResponse {
  users: User[];
  total: number;
}
