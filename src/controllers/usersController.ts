import { Response, Request } from 'express';

import User from '../models/user';

const getUsers = async (request: Request, response: Response) => {
  try {
    const users = await User.find();
    response.json(users);
  } catch (error) {
    console.log(error);
  }
};

export { getUsers };
