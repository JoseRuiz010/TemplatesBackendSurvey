import { Router } from "express";
import { UserController } from "../controllers/UserController";
import { container } from "tsyringe";

const router = Router();
const userController = container.resolve(UserController)

router.get('/', (req, res) => userController.getAllUsers(req, res));
router.get('/:id', (req, res) => userController.getById(req, res));
router.post('/', (req, res) => userController.createUsers(req, res));
router.put('/:id', (req, res) => userController.updateUsers(req, res));
router.delete('/:id', (req, res) => userController.deleteUsers(req, res));


export { router as userRoutes }