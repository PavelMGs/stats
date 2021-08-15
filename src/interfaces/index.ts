export interface IUser {
  createdAt: string;
  email: string;
  first_name: string;
  gender: string;
  id: number;
  ip_address: string;
  last_name: string;
  updatedAt: string;
}

export interface IStats {
  clicks: number;
  createdAt: string;
  date: string;
  page_views: number;
  updatedAt: string;
  user_id: number;
}

export interface IData {
  users: IUser[]
  statistic: IStats[]
}