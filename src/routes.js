import { Router } from 'express';
const routes = new Router();

import NoteController from './app/controllers/NoteController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import AuthMiddleware from './app/middlewares/AuthMiddleware';

routes.post('/users', UserController.store);

routes.post('/auth', SessionController.store);
routes.use(AuthMiddleware);

routes.post('/notes', NoteController.store);
routes.get('/notes', NoteController.index);

export default routes;
