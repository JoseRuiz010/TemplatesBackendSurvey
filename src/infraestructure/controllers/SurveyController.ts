import { Request, Response } from "express";
import { UserUsesCases } from "../../application/use-cases/userUsesCases";
import { User } from "../../domain/entities/user";
import { container } from "tsyringe";
import { handleResponse } from "../../shared/utils/responseHandler";
import { ZodError } from "zod";
import { SurveyUsesCases } from "../../application/use-cases/surveyUsesCases";
import { Survey } from "../../domain/entities/Survey";
 
export class SurveyController {

  private surveyUsesCases: SurveyUsesCases;

  constructor() {
    this.surveyUsesCases = container.resolve(SurveyUsesCases)
  }

  async getAll(req: Request, res: Response): Promise<Response> {
    try {
      const surveys = await this.surveyUsesCases.getAll();
      return handleResponse(res, surveys)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to delete survey';
      return handleResponse(res, null, errorMessage);
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const survey = await this.surveyUsesCases.getById(id);
      return handleResponse(res, survey);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to delete user';
      return handleResponse(res, null, errorMessage);
    }
  }

  async create(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const newUser = new Survey(
        data.id,
        data.name,
        data.description,
        data.type,
        data.sub_type,
        data.status,
        data.visible,
        data.enabled
      );
      const entity = await this.surveyUsesCases.save(newUser)
      return handleResponse(res, entity);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : error instanceof ZodError ? error : 'Failed to delete user';
      console.log(`Error CTRL ${errorMessage}`)
      return handleResponse(res, null, errorMessage);
    }
  }
  async update(req: Request, res: Response): Promise<Response> {
    try {
      const data = req.body;
      const edit = new Survey(
        data.id,
        data.name,
        data.description,
        data.type,
        data.sub_type,
        data.status,
        data.visible,
        data.enabled
      );
      const entity = await this.surveyUsesCases.update(req.params.id,edit)
      return handleResponse(res, entity);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : error instanceof ZodError ? error : 'Failed to delete user';
      console.log(`Error CTRL ${errorMessage}`)
      return handleResponse(res, null, errorMessage);
    }
  }

  async delete(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const entity = await this.surveyUsesCases.delete(id)
      return res.status(204).json(entity);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to delete user';
      return handleResponse(res, null, errorMessage);
    }
  }

}
