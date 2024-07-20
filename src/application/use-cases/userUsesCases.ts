import { Response } from "express";
import { User } from "../../domain/entities/user";
import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { inject, injectable } from "tsyringe";
import { IValidator } from "../../domain/interfaces/IValidador";
import { CreateUserDTO } from "../../domain/dtos/user.dtos";

@injectable()
export class UserUsesCases {
 
  constructor(
  @inject('IUserRepository')  private userRepository:IUserRepository,
  @inject('IUserValidator')  private userValidator:IValidator<User>
  ) {}

  async getAll(): Promise<User[]> {
     const users= await this.userRepository.getAll()
     console.log({users});
     
    return users
  }
   async getById(id: string): Promise<User> {
    const user: User =await this.userRepository.getById(id)
    return user;
  }
  async save(entity: CreateUserDTO): Promise<User> {
      const userData = new User(
        '',
        entity.name,
        entity.email,
        entity.userName,
        entity.birthDate,
        entity.password,
        entity.phone,
        entity.profileImage,
      );
    const newUser =await this.userRepository.save(userData)
    return newUser;
  }
  async update(id: string, entity: User): Promise<User> {
    const user= await this.userRepository.update(id,entity);
    return user;
  }
  async delete(id: string): Promise<User> {
   const userDelete=await this.userRepository.delete(id)
    return userDelete;
  }
  addColaborador(entity: User): User {
    throw new Error("Method not implemented.");
  }
}