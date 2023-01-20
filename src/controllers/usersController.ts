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

const deleteUser = async (request: Request, response: Response) => {
  try {
    const userId = new ObjectId(request.params.id);
    const deletedUser = await User.findByIdAndDelete(userId);
    response.json(deletedUser);
  } catch (error) {
    console.log(error);
  }
};

export { getUsers, deleteUser };
