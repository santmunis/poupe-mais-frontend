export interface IUser {
  id?: string;
  name: string;
  last_name: string;
  phone: string;
  email: string;
  subscription?: string;
  password?: string;
  confirm_password?: string;
}
