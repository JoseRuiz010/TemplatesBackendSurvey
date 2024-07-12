import { Response } from "express";
import { IUserRepository } from "../../../domain/interfaces/IUserRepository";
import { User } from "../../../domain/entities/user";
import { singleton } from "tsyringe";
import { v4 as uuidv4 } from 'uuid';
import { PrismaClient } from '@prisma/client'
import { ISurveyRepository } from "../../../domain/interfaces/ISurveyRepository ";
import { Survey } from "../../../domain/entities/Survey";

@singleton()
export class MysqlSurveyRepository implements ISurveyRepository {
  private prisma = new PrismaClient();
 
  async getAll(): Promise<Survey[]> {
    const responsePrisma=await this.prisma.survey.findMany({
      include:{
        user:true
      }
    })
    console.log("MYSQL",JSON.stringify(responsePrisma));
    
    return responsePrisma.map(u=> new Survey(
      u.id,
      u.name,
      u.description,
      u.type,
      u.sub_type,
      u.status,
      u.visible,
      u.enabled,
      u.user?new User(u.user?.id,u.user?.name,u.user?.email,u.user?.userName,u.user?.birthDate,'',u.user?.phone,u.user?.phone,u.user?.status,u.user?.lastSeen,[]):null
    ))
  }
   async getById(id: string): Promise<Survey> {
    const u =await this.prisma.survey.findUnique({where:{id:Number(id)}});
    if(!u){
       throw new Error(`User width ${id} not found`);
    }
   return   new Survey(
    u.id,
    u.name,
    u.description,
    u.type,
    u.sub_type,
    u.status,
    u.visible,
    u.enabled
    )
    
  }
  async save(entity: Survey): Promise<Survey> {
    const {
      getName,
      getDescription,
      getType,
      getSubType,
      getStatus,
      getVisible,
      getEnabled
    }= entity
     const newSurvey = await this.prisma.survey.create({data:{
     name: getName,
     description:getDescription,
     type:getType,
     sub_type:getSubType,
     status:getStatus,
     visible:getVisible,
     enabled:getEnabled
    }})
    return new Survey(
    newSurvey.id,
    newSurvey.name,
    newSurvey.description,
    newSurvey.type,
    newSurvey.sub_type,
    newSurvey.status,
    newSurvey.visible,
    newSurvey.enabled
    );
  }
  async update(id: string, entity: Survey): Promise<Survey> {
    const {
      getName,
      getDescription,
      getType,
      getSubType,
      getStatus,
      getVisible,
      getEnabled
    }= entity
    const updateSurvey=await this.prisma.survey.update({where:{id:Number(id)},data:{
      name: getName,
     description:getDescription,
     type:getType,
     sub_type:getSubType,
     status:getStatus,
     visible:getVisible,
     enabled:getEnabled
      }
    })
    return new Survey(
      updateSurvey.id,
      updateSurvey.name,
      updateSurvey.description,
      updateSurvey.type,
      updateSurvey.sub_type,
      updateSurvey.status,
      updateSurvey.visible,
      updateSurvey.enabled
      );
  }
  async delete(id: string): Promise<Survey> {
    throw new Error("Method not implemented.");
  }
}