import 'reflect-metadata';

import * as faker from 'faker';
import { getRepository } from 'typeorm';

import { connectDatabase } from './database';
import { User } from './entity/User';

const createUsers = async (count = 50) => {
  const users = Array.from(Array(count)).map(() => {
    return getRepository(User).create({
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      email: faker.internet.email(),
      isActive: faker.random.boolean(),
    });
  });

  return getRepository(User).save(users);
};

connectDatabase()
  .then(async () => {
    await createUsers();
  })
  .catch(console.log);
