import { User } from "../entities/user";
import { RepositoryGeneric } from "./IGenericRepository";

export interface IUserRepository extends RepositoryGeneric<User,string> {
  addColaborador(entity:User):User
}