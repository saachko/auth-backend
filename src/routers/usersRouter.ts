import express from 'express';

import { getUsers } from '../controllers/usersController';
import usersMiddleware from '../middlewares/usersMiddlewares';

const usersRouter = express.Router();
usersRouter.get('/users', usersMiddleware, getUsers);
usersRouter.delete('/:id');

export default usersRouter;
