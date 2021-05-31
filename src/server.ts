import express from 'express';
import { home } from './routes/home';
import { notFound } from './routes/not-found';
import { userRoutes } from './routes/user-routes';

export const initServer = (): void => {
  const app = express();
  app.use(express.json());
  app.use(express.urlencoded({
    extended: true
  }));

  const port = +(process.env['PORT'] || 3000);

  app.get('/', home);
  app.get('/home', home);
  userRoutes(app);

  app.use('*', notFound);

  app.listen(port, () => {
    console.log(`server started at http://localhost:${port}`);
  });
};
