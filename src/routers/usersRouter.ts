import express from 'express';

import { getUsers } from '../controllers/usersController';

const usersRouter = express.Router();
usersRouter.get('/users', getUsers);
usersRouter.delete('/:id');

export default usersRouter;
