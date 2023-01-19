import express from 'express';
import mongoose from 'mongoose';

import { PORT } from './constants';

const app = express();
app.use(express.json());

const start = async () => {
  try {
    await mongoose.connect(
      'mongodb+srv://naztya12323:268bsn@cluster0.jaiuwfb.mongodb.net/auth-backend?retryWrites=true&w=majority'
    );
    app.listen(PORT, () => console.log('server started'));
  } catch (error) {
    console.log(error);
  }
};

start();
