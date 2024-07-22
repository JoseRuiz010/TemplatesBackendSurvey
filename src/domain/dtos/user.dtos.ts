// src/dtos/UserDTO.ts

// export interface CreateUserDTO {
//   // id: string?;
//   name: string;
//   email: string;
//   userName: string;
//   birthDate: string;
//   password: string ;
//   phone: string | null;
//   profileImage?: string | null |undefined;
// }

// export interface UpdateUserDTO {
//   name?: string;
//   email?: string;
//   username?: string;
//   birthDate?: string;
//   password?: string | null;
//   phone?: string | null;
//   profileImage?: string | null;
//   status?: string | null;
//   lastSeen?: string | null;
// }
export interface UserDTO {
  id: number | string;
  name: string;
  email: string;
  userName: string;
  birthDate: string;
  password?: string;
  phone?: string;
  profileImage?: string;
  status?: string;
  lastSeen?: string;
  surveys?: SurveyDTO[];
}

export interface CreateUserDTO extends Omit<UserDTO, 'id'> {}
export interface UpdateUserDTO extends Partial<CreateUserDTO> {}

export interface SurveyDTO {
  id: string | number;
  name: string;
  description: string;
  type?: string;
  sub_type?: string;
  status?: string;
  visible?: boolean;
  enabled: boolean;
  user?: UserDTO;
}

export interface CreateSurveyDTO extends Omit<SurveyDTO, 'id'> {}
export interface UpdateSurveyDTO extends Partial<CreateSurveyDTO> {}