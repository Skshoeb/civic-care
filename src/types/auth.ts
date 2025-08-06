export type UserRole = 'super_admin' | 'admin' | 'resident' | 'security_staff';

export interface User {
  userId: number;
  name: string;
  email: string;
  phone: string;
  role: UserRole;
  societyId?: number;
  flatId?: number;
  isVerified: boolean;
}

export interface AuthContextType {
  user: User | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  isLoading: boolean;
}

export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterResidentData {
  name: string;
  email: string;
  phone: string;
  password: string;
  societyId: number;
  flatNumber: string;
}

export interface RegisterSocietyData {
  // Society Details
  societyName: string;
  address: string;
  city: string;
  state: string;
  country: string;
  pincode: string;
  
  // Admin Details
  adminName: string;
  adminEmail: string;
  adminPhone: string;
  adminPassword: string;
}