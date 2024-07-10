import { Router } from "express";
import { SurveyController } from "../controllers/SurveyController";

const router = Router();
const surveyController = new SurveyController();

router.get('/', (req, res) => surveyController.getAll(req, res));
router.get('/:id', (req, res) => surveyController.getById(req, res));
router.post('/', (req, res) => surveyController.create(req, res));
router.put('/:id', (req, res) => surveyController.update(req, res));
router.delete('/:id', (req, res) => surveyController.delete(req, res));


export { router as surveyRoutes }