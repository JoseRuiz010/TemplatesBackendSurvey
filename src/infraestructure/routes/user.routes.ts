import { Router } from "express";
import { UserController } from "../controllers/UserController";

const router = Router();
const userController = new UserController();

router.get('/:id', (req, res) => userController.getUserById(req, res));


export { router as userRoutes }