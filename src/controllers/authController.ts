import { Response, Request } from 'express';
import bcrypt from 'bcryptjs';

import User from '../models/user';

const signUp = async (request: Request, response: Response) => {
  try {
    const { username, email, password } = request.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return response.status(400).json({ message: 'User already exists' });
    }
    const hashPassword = bcrypt.hashSync(password, 6);
    const todayDate = new Date().toLocaleString('ru-RU', {
      year: 'numeric',
      month: 'numeric',
      day: 'numeric',
    });
    const newUser = new User({
      username,
      email,
      password: hashPassword,
      registrationDate: todayDate,
      lastLoginDate: todayDate,
      isBlocked: false,
    });
    await newUser.save();
    return response.json({ message: 'You have signed up' });
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: 'Registration error' });
  }
};

const signIn = async (request: Request, response: Response) => {
  try {
  } catch (error) {
    console.log(error);
    response.status(400).json({ message: 'Authorization error' });
  }
};

export { signUp, signIn };
