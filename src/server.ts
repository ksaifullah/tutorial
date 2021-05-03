import express from 'express';
import { home } from './routes/home';
import { notFound } from './routes/not-found';

const app = express();
const port = 8080;

app.get('/', home);
app.get('/home', home);

app.use('*', notFound);

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}`);
});
