import { User } from "../../domain/entities/user";
import { IValidator } from "../../domain/interfaces/IValidador";
import { z } from 'zod';

export interface CreateUsernDTO {
    name: string;
    email: string;
  }

export class UserValidator implements IValidator<CreateUsernDTO>{

    private schema = z.object({
        name: z.string().min(4,'name name must be a mare 4'),
        email: z.string().email().min(1, 'must be email valid'),
      });

    validate(data: CreateUsernDTO): void {
       this.schema.parse({
        name:data.name,
        email:data.email
       })
    }

}