import { Response } from "express";
import { User } from "../../domain/entities/user";
import { IUserRepository } from "../../domain/interfaces/IUserRepository";

export class UserUsesCases implements IUserRepository {
  private users: User[] = [
    new User(1, "John Doe", "john@example.com"),
    new User(2, "Jane Doe", "jane@example.com"),
  ];
  get(): Promise<User> {
    throw new Error("Method not implemented.");
  }
   async getById(id: string): Promise<User> {
    const user: User | undefined = this.users.find(u => u.id === Number(id));
    if(!user){
       throw new Error(`User width ${id} not found`);
    }
    return user;
  }
  save(entity: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  update(id: string, entity: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  delete(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  addColaborador(entity: User): User {
    throw new Error("Method not implemented.");
  }
// async getById(id:string):Promise<User | undefined>{
//   const user: User | undefined = this.users.find(u => u.id === Number(id));
//   return user;
//   }
}