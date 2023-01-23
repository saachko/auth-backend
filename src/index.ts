import express from 'express';
import mongoose from 'mongoose';

import { PORT } from './constants';
import authRouter from './routers/authRouter';
import usersRouter from './routers/usersRouter';

const app = express();
app.use(express.json());
app.use('/users', usersRouter);
app.use('/auth', authRouter);

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
