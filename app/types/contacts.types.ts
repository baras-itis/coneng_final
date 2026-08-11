export interface UserData {
  firstname: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  subject: string;
  message: string;
}

export interface Loading {
  loading: boolean;
  success: boolean | null;
  error: null | string;
}
