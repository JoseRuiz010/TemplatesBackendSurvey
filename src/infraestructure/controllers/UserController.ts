import { Request, Response } from "express";
import { UserUsesCases } from "../../application/use-cases/userUsesCases";
import { User } from "../../domain/entities/user";
import { container } from "tsyringe";
import { handleResponse } from "../../shared/utils/responseHandler";
import { ZodError } from "zod";

export class UserController {

  private userUsesCases: UserUsesCases;

  constructor() {
    this.userUsesCases = container.resolve(UserUsesCases)
  }

  async getAllUsers(req: Request, res: Response): Promise<Response> {
    try {
      const users = await this.userUsesCases.getAll();
      return handleResponse(res, users)
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to delete user';
      return handleResponse(res, null, errorMessage); 
    }
  }

  async getById(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const user = await this.userUsesCases.getById(id);
      return handleResponse(res, user);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to delete user';
      return handleResponse(res, null, errorMessage); 
    }
  }

  async createUsers(req: Request, res: Response): Promise<Response> {
  try {
    const userData = req.body;  
   
      const newUser = new User(
      userData.id, 
      userData.name,
      userData.email,
      userData.username,
      userData.birthDate,
      userData.password,
      userData.phone,
      userData.profileImage,
      userData.status,
      userData.lastSeen
    );     
    const user = await this.userUsesCases.save(userData)
    return handleResponse(res, user);
  } catch (error) {
    const errorMessage = error instanceof Error ? error.message : error instanceof ZodError? error : 'Failed to delete user';
    console.log(`Error CTRL ${errorMessage}`)
    return handleResponse(res, null, errorMessage); 
  }
    
    
  }

  async deleteUsers(req: Request, res: Response): Promise<Response> {
    try {
      const { id } = req.params
      const users = await this.userUsesCases.delete(id)
      return res.status(204).json(users);
    } catch (error) {
      const errorMessage = error instanceof Error ? error.message : 'Failed to delete user';
      return handleResponse(res, null, errorMessage); 
    }
  }

}
