import { RequestHandler } from 'express';

export const home: RequestHandler = (_, res) => {
  res.send('Hello World!');
};
