import { Response, Request } from 'express';

import User from '../models/user';

const getUsers = async (request: Request, response: Response) => {
  try {
    response.json('server works');
  } catch (error) {
    console.log(error);
  }
};

export { getUsers };
