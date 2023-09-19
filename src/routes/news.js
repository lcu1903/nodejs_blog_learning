import { NewsController } from '../app/controllers/NewsController.js';
import express from 'express';

const newsRouter = express.Router();

const newsController = new NewsController();

newsRouter.use('/:slug', newsController.show);

newsRouter.use('/', newsController.index);

export { newsRouter };
