import { User } from "../../domain/entities/user";
import { IValidator } from "../../domain/interfaces/IValidador";
import { z,ZodErrorMap } from 'zod';

export interface CreateUsernDTO {
  name: string;
  email: string;
  username: string;
  phone: string | null;
  birth_date: string;
}

export class UserValidator implements IValidator<CreateUsernDTO> {

  private schema = z.object({
    name: z.string().min(4, 'name name must be a mare 4'),
    email: z.string().email().min(1, 'must be email valid'),
    username: z.string(),
    phone: z.string().nullable(),
    profile_image: z.string().optional().nullable(),
    status: z.string().optional().nullable(),
    birth_date: z.string(),
    last_seen: z.string().optional().nullable(),
  });

  validate(data: CreateUsernDTO): CreateUsernDTO {
    return this.schema.parse({
      name: data.name,
      email: data.email,
      username: data.username,
      phone: data.phone,
      birth_date: data.birth_date
    })
  }

}