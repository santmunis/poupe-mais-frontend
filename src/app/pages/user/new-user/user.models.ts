export interface IUser {
  id?: string;
  name: string;
  last_name: string;
  phone: string;
  email: string;
  subscription?: ISubscription;
  password?: string;
  confirm_password?: string;
}

export interface ISubscription {
  id: string;
  name: string;
  description: string;
  created_at: Date;
  updated_at: Date;
  deleted_at: Date;
}
