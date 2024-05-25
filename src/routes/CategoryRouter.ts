import { Router } from 'express';
import CategoryController from '../controllers/category.controller';

const control = new CategoryController();

const categoryRouter = Router();

categoryRouter.get('/', control.get.bind(control));

export default categoryRouter;