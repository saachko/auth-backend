import { Response, Request } from 'express';
import { ObjectId } from 'mongodb';

import User from '../models/user';

const getUsers = async (request: Request, response: Response) => {
  try {
    const users = await User.find();
    response.json(users);
  } catch (error) {
    console.log(error);
  }
};

const getUserById = async (request: Request, response: Response) => {
  try {
    const userId = new ObjectId(request.params.id);
    const user = await User.findById(userId);
    response.json(user);
  } catch (error) {
    console.log(error);
  }
};

const deleteUser = async (request: Request, response: Response) => {
  try {
    const userId = new ObjectId(request.params.id);
    const deletedUser = await User.findByIdAndDelete(userId);
    response.json(deletedUser);
  } catch (error) {
    console.log(error);
  }
};

const updateUser = async (request: Request, response: Response) => {
  try {
    const userId = new ObjectId(request.params.id);
    const updatedUser = await User.findByIdAndUpdate(userId, request.body, {
      new: true,
    });
    response.json(updatedUser);
  } catch (error) {
    console.log(error);
  }
};

export { getUsers, getUserById, deleteUser, updateUser };
