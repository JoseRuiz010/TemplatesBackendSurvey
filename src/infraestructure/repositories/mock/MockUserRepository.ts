import { Response } from "express";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import { User } from "../../../domain/entities/user";
import { singleton } from "tsyringe";
import { v4 as uuidv4 } from 'uuid';


@singleton()
export class MockUserRepository implements IUserRepository {
  private users: User[] = [
    new User(1, "John Doe", "john@example.com","jon010","10-11-1997","12345"),
    new User(2, "Jane Doe", "jane@example.com","jon011","10-11-2001"),
  ];
  async getAll(): Promise<User[]> {
    return this.users
  }
   async getById(id: string): Promise<User> {
    const user: User | undefined = this.users.find(u => u.getId == (id));
    if(!user){
       throw new Error(`User width ${id} not found`);
    }
    return user;
  }
  async save(entity: User): Promise<User> {
    const newUser = new User(
      uuidv4(),
      entity.getName,
      entity.getEmail,
      entity.getUserName,
      entity.getBirthDate,
      entity.getPassword,
      entity.getPhone,
      entity.getProfileImage,
      entity.getStatus,
      entity.getLastSeen
    );
    this.users.push(newUser);
    return newUser;
  }
  async update(id: string, entity: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<User> {
    const userDelete= this.users.find(u=> u.getId == (id))
    if(!userDelete) throw new Error (`No se encontro el usuario con ID= ${id}`)
    const aux= this.users.filter(u=> u.getId !== (id))
    this.users=aux;
    return userDelete;
  }
  addColaborador(entity: User): User {
    throw new Error("Method not implemented.");
  }
}