import { Request, Response } from "express";
import { User } from "../../domain/entities/user";

export class UserController {
  private users: User[] = [
    new User(1, "John Doe", "john@example.com"),
    new User(2, "Jane Doe", "jane@example.com"),
  ];

  public async getUserById(req: Request, res: Response): Promise<Response> {
    const { id } = req.params;
    console.log(this.users);
    const user: User | undefined = this.users.find(u => u.id === Number(id));
    return res.json({ data: user });
  }
}
