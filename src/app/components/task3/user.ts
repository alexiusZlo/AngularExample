export interface User {
  _id?: string;
  fullName: string;
  avatarUrl: string;
  email: string;
  gender?: string;
  birthdate?: Date | string;
  address?: string;
}
