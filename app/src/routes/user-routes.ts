import { Express } from 'express';
import { getRepository } from 'typeorm';
import { User } from '../entity/User';

export const userRoutes = (app: Express): void => {
  app.get('/users', async (_, res) => {
    const userList = await getRepository(User).find({take: 60});
    res.json(userList);
  });

  app.get('/user/:uid', async (req, res) => {
    const u = await getRepository(User).findOne(req.params.uid);
    res.json(u);
  });

  app.post('/user/:uid', async (req, res) => {
    const u = await getRepository(User).update(req.params.uid, req.body);
    res.json(u.affected === 1);
  });

  app.put('/user', async (req, res) => {
    const u = await getRepository(User).save(req.body);
    res.send(u);
  });

  app.delete('/user/:uid', async (req, res) => {
    const u = await getRepository(User).delete(req.params.uid);
    res.send(u.affected === 1);
  });
};
