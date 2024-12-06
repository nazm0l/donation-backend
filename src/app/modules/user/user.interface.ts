export type User = {
  name: string;
  email: string;
  phone: string;
  password: string;
  address: string;
  image: string;
  role: 'admin' | 'user';
  isActive: boolean;
};
