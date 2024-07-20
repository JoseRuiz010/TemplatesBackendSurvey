import { CreateUserDTO } from "../../domain/dtos/user.dtos";
 import { IValidator } from "../../domain/interfaces/IValidador";
import {  z } from 'zod';

// export interface CreateUsernDTO {
//   name: string;
//   email: string;
//   username: string;
//   phone: string | null;
//   birth_date: string;
// }

export class UserValidator implements IValidator<CreateUserDTO> {

  private schema = z.object({
    // id: z.string().nullable().optional(),
    name: z.string().min(4, 'name name must be a mare 4'),
    email: z.string().email().min(1, 'must be email valid'),
    userName: z.string(),
    birthDate:z.string(),
    password:z.string(),
    phone: z.string().nullable(),
    profileImage: z.string().nullable().optional()
  });

  validate(data: CreateUserDTO): CreateUserDTO {
    return this.schema.parse({
      // id:data.id,    
      name: data.name,
      email: data.email,
      userName: data.userName,
      birthDate: data.birthDate,
      password:data.password,
      phone: data.phone,
      profileImage:data.profileImage
    })
  }

}