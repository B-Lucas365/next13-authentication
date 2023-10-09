export interface UserTypes {
  _id: string;
  userName: string;
  email: string;
  password: string;
  isEmailVerified: boolean;
  isAdmin: boolean;
  createdAt: Date;
  updatedAt: Date; 
}