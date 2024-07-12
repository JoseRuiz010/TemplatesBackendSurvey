// src/dtos/UserDTO.ts

export interface CreateUserDTO {
  id: string;
  name: string;
  email: string;
  username: string;
  birthDate: string;
  password: string ;
  phone: string | null;
  profileImage: string | null;
  // status: string | null;
  // lastSeen: string | null;
}

export interface UpdateUserDTO {
  name?: string;
  email?: string;
  username?: string;
  birthDate?: string;
  password?: string | null;
  phone?: string | null;
  profileImage?: string | null;
  status?: string | null;
  lastSeen?: string | null;
}
