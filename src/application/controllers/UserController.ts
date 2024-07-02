import { Request, Response } from "express";
 import { UserUsesCases } from "../use-cases/userUsesCases";

export class UserController {
  userServices= new UserUsesCases();

  public async getUserById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    const user=await this.userServices.getById(id);
    return res.json({ data: user });
  }
}
