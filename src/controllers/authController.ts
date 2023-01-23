import { Response, Request } from 'express';
import bcrypt from 'bcryptjs';
import { validationResult } from 'express-validator';
import jwt from 'jsonwebtoken';

import User from '../models/user';
import { SECRET_KEY } from '../constants';

const generateToken = (id: string, email: string) => {
  return jwt.sign({ id, email }, SECRET_KEY, { expiresIn: '4h' });
};

const signUp = async (request: Request, response: Response) => {
  try {
    const validationErrors = validationResult(request);
    if (!validationErrors.isEmpty()) {
      response.status(400).json({ message: 'Registration error', validationErrors });
    }

    const { username, email, password } = request.body;
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return response.status(400).json({ message: 'User already exists' });
    }

    const hashPassword = bcrypt.hashSync(password, 6);
    const todayDate = new Date().toLocaleString('ru-RU');
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
    response.status(400).json({ message: 'Registration error' });
    throw new Error(`${error}`);
  }
};

const signIn = async (request: Request, response: Response) => {
  try {
    const { email, password } = request.body;
    const user = await User.findOne({ email });
    if (!user) {
      return response.status(400).json({ message: "It seems you don't have an account" });
    }
    const validPassword = bcrypt.compareSync(password, user.password);
    if (!validPassword) {
      return response.status(400).json({ message: 'Incorrect password!' });
    }
    if (user.isBlocked) {
      return response.status(403).json({ message: "User is blocked and can't sign in!" });
    }

    const todayDate = new Date().toLocaleString('ru-RU');
    await User.findByIdAndUpdate(user._id, {
      lastLoginDate: todayDate,
    });

    const token = generateToken(user._id.toString(), user.email);
    return response.json({ token });
  } catch (error) {
    response.status(400).json({ message: 'Authorization error' });
    throw new Error(`${error}`);
  }
};

export { signUp, signIn };
