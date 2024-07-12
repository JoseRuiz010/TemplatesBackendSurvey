import { Response } from "express";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import { User } from "../../../domain/entities/user";
import { singleton } from "tsyringe";
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client'
import { Survey } from "../../../domain/entities/Survey";

@singleton()
export class MysqlUserRepository implements IUserRepository {
  private prisma = new PrismaClient();
 
  async getAll(): Promise<User[]> {
    const usersPrisma=await this.prisma.user.findMany({
      include:{
        surveys:true
      }
    })
    console.log("MYSQL",usersPrisma);
    
    return (usersPrisma).map(u=> new User(
      u.id,
      u.name,
      u.email,
      u.userName,
      u.birthDate,
      u.password,
      u.phone,
      u.profileImage,
      u.status,
      u.lastSeen,
      u.surveys.map(s=>new Survey(s.id,s.name,s.description,s.type,s.sub_type,s.status,s.visible,s.enabled))
    ))
  }
   async getById(id: string): Promise<User> {
    const u =await this.prisma.user.findUnique({where:{id:Number(id)}});
    if(!u){
       throw new Error(`User width ${id} not found`);
    }
   return   new User(
      u.id,
      u.name,
      u.email,
      u.userName,
      u.birthDate,
      u.password,
      u.phone,
      u.profileImage,
      u.status,
      u.lastSeen,
      []
    )
    
  }
  async save(entity: User): Promise<User> {
    const {
      getName,
      getEmail,
      getUserName,
      getBirthDate,
      getPassword,
      getPhone,
      getProfileImage,
      getStatus,
      getLastSeen
    }= entity
     const newUser = await this.prisma.user.create({data:{
     name: getName,
     email: getEmail,
     userName: getUserName,
     birthDate: getBirthDate,
     password: getPassword,
     phone: getPhone,
     profileImage: getProfileImage,
     status: getStatus,
     lastSeen: getLastSeen
     }})
    return new User(
      newUser.id,
      newUser.name,
      newUser.email,
      newUser.userName,
      newUser.birthDate,
      newUser.password,
      newUser.phone,
      newUser.profileImage,
      newUser.status,
      newUser.lastSeen,
      []
    );
  }
  async update(id: string, entity: User): Promise<User> {
    const {
      getName,
      getEmail,
      getUserName,
      getBirthDate,
      getPassword,
      getPhone,
      getProfileImage,
      getStatus,
      getLastSeen
    }= entity
    const userUpdate=await this.prisma.user.update({where:{id:Number(id)},data:{
      name: getName,
      email: getEmail,
      userName: getUserName,
      birthDate: getBirthDate,
      password: getPassword,
      phone: getPhone?? '',
      profileImage: getProfileImage?? '',
      status: getStatus?? '',
      lastSeen: getLastSeen?? ''
      }
    })
    return new User(
      userUpdate.id,
      userUpdate.name,
      userUpdate.email,
      userUpdate.userName,
      userUpdate.birthDate,
      userUpdate.password,
      userUpdate.phone,
      userUpdate.profileImage,
      userUpdate.status,
      userUpdate.lastSeen,
      []
    );
  }
  async delete(id: string): Promise<User> {
    throw new Error("Method not implemented.");
  }
  addColaborador(entity: User): User {
    throw new Error("Method not implemented.");
  }
}