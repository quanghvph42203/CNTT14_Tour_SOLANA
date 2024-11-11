export interface User {
  id: string ;
  name: string;
  username: string;
  password: string;
  email: string;
  confirmPassword: string;
  phone: string;
  avatar: string | null;
  role?: string;
  address: string;
}
