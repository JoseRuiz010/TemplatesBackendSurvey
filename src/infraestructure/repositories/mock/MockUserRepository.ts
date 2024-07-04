import { Response } from "express";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import { User } from "../../../domain/entities/user";
import { singleton } from "tsyringe";
 
@singleton()
export class MockUserRepository implements IUserRepository {
  private users: User[] = [
    new User(1, "John Doe", "john@example.com"),
    new User(2, "Jane Doe", "jane@example.com"),
  ];
  async getAll(): Promise<User[]> {
    return this.users
  }
   async getById(id: string): Promise<User> {
    const user: User | undefined = this.users.find(u => u.id === Number(id));
    if(!user){
       throw new Error(`User width ${id} not found`);
    }
    return user;
  }
  async save(entity: User): Promise<User> {
    const newUser= entity;
    this.users.push(newUser);
    return newUser;
  }
  async update(id: string, entity: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<User> {
    const userDelete= this.users.find(u=> u.id == Number(id))
    if(!userDelete) throw new Error (`No se encontro el usuario con ID= ${id}`)
    const aux= this.users.filter(u=> u.id !== Number(id))
    this.users=aux;
    return userDelete;
  }
  addColaborador(entity: User): User {
    throw new Error("Method not implemented.");
  }
}