import { Post } from './../entity/Post';
import { getRepository } from 'typeorm';
import { Express } from 'express';

export const postRoutes = (app: Express): void => {
  app.get('/posts', async (_, res) => {
    const posts = await getRepository(Post).find({take: 5});
    res.json(posts);
  });

  app.get('/post/:postId', async (req, res) => {
    const post = await getRepository(Post).findOne(req.params.postId);
    res.json(post);
  });

  app.put('/post', async (req, res) => {
    const p = await getRepository(Post).save(req.body);
    res.send(p);
  });

  app.post('/post/:postId', async (req, res) => {
    const p = await getRepository(Post).update(req.params.postId, req.body);
    res.send(p);
  });
};
