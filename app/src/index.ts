import 'reflect-metadata';
import 'source-map-support/register';

import { connectDatabase } from './database';
import { initServer } from './server';

connectDatabase()
  .then(initServer)
  .catch(console.log);
