import { Response } from "express";
import { User } from "../../domain/entities/user";
import { IUserRepository } from "../../domain/interfaces/IUserRepository";
import { inject, injectable } from "tsyringe";
import { IValidator } from "../../domain/interfaces/IValidador";
import { ISurveyRepository } from "../../domain/interfaces/ISurveyRepository ";
import { Survey } from "../../domain/entities/Survey";
 
@injectable()
export class SurveyUsesCases {
 
  constructor(
  @inject('ISurveyRepository')  private surveyRepository:ISurveyRepository,
  // @inject('IUserValidator')  private userValidator:IValidator<Survey>
  ) {}

  async getAll(): Promise<Survey[]> {
     const surveys= await this.surveyRepository.getAll()
     console.log({surveys});
     
    return surveys
  }
   async getById(id: string): Promise<Survey> {
    const survey =await this.surveyRepository.getById(id)
    return survey;
  }
  async save(entity: Survey): Promise<Survey> {
    const newSurvey =await this.surveyRepository.save(entity)
    return newSurvey;
  }
  async update(id: string, entity: Survey): Promise<Survey> {
    const survey= await this.surveyRepository.update(id,entity);
    return survey;
  }
  async delete(id: string): Promise<Survey> {
   const surveyDelete=await this.surveyRepository.delete(id)
    return surveyDelete;
  } 
}