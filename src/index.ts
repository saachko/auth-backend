import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';

import { PORT } from './constants';
import authRouter from './routers/authRouter';
import usersRouter from './routers/usersRouter';

const app = express();
app.use(express.json());
app.use((request, response, next) => {
  response.header('Access-Control-Allow-Origin', '*');
  next();
});
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use(
  cors({
    origin: '*',
  })
);

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://naztya12323:268bsn@cluster0.jaiuwfb.mongodb.net/auth-backend?retryWrites=true&w=majority'
    );
    app.listen(PORT, () => console.log('server started'));
  } catch (error) {
    throw new Error(`${error}`);
  }
};

start();
