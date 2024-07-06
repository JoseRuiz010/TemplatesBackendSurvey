import { Response } from "express";
import { User } from "../../domain/entities/user";
import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { inject, injectable } from "tsyringe";
import { IValidator } from "../../domain/interfaces/IValidador";

@injectable()
export class UserUsesCases {
 
  constructor(
  @inject('IUserRepository')  private userRepository:IUserRepository,
  @inject('IUserValidator')  private userValidator:IValidator<User>
  ) {}

  async getAll(): Promise<User[]> {
    return await this.userRepository.getAll()
  }
   async getById(id: string): Promise<User> {
    const user: User =await this.userRepository.getById(id)
    return user;
  }
  async save(entity: User): Promise<User> {
    const userValidado=this.userValidator.validate(entity);
    const newUser =await this.userRepository.save(userValidado)
    return newUser;
  }
  async update(id: string, entity: User): Promise<User> {
    throw new Error("Method not implemented.");
  }
  async delete(id: string): Promise<User> {
   const userDelete=await this.userRepository.delete(id)
    return userDelete;
  }
  addColaborador(entity: User): User {
    throw new Error("Method not implemented.");
  }
}