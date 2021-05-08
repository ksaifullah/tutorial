import 'reflect-metadata';

import * as faker from 'faker';
import { getRepository } from 'typeorm';

import { connectDatabase } from './database';
import { User } from './entity/User';

const waiter = (millisecond: number) => new Promise(r => setTimeout(r, millisecond));

const createUsers = async (count = 50): Promise<Array<User>> => {
  return Array.from(Array(count)).reduce((usersPromise: Promise<Array<User>>) => {
    return usersPromise.then(async (users) => {
      await waiter(Math.floor(Math.random() * 1000));
      const user = await getRepository(User).save({
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        isActive: faker.datatype.boolean(),
      });
      return users.concat([user]);
    });
  }, Promise.resolve([]));
};

connectDatabase()
  .then(async () => {
    await createUsers();
  })
  .catch(console.log);
