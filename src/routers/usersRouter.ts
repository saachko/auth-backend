import express from 'express';

const usersRouter = express.Router();
usersRouter.get('/users');
usersRouter.delete('/:id');

export default usersRouter;
