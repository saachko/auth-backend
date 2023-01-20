import express from 'express';

import { getUsers, deleteUser, updateUser } from '../controllers/usersController';
import usersMiddleware from '../middlewares/usersMiddlewares';

const usersRouter = express.Router();
usersRouter.get('/users', usersMiddleware, getUsers);
usersRouter.delete('/:id', usersMiddleware, deleteUser);
usersRouter.put('/:id', usersMiddleware, updateUser);

export default usersRouter;
