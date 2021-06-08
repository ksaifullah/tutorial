import 'reflect-metadata';

import * as faker from 'faker';
import { getRepository } from 'typeorm';

import { connectDatabase } from './database';
import { User } from './entity/User';
import { Post } from './entity/Post';

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

const createPost = async (): Promise<Post> => {
  return getRepository(Post).save({
    title: faker.lorem.sentence(),
    body: faker.lorem.paragraphs(),
  });
};

const createPosts = async (count = 200): Promise<Array<Post>> => {
  const posts: Post[] = [];
  for (let i = 0; i < count; i++) {
    const post = await createPost();
    posts.push(post);
    await waiter(Math.random() * 200);
  }

  return posts;
};

connectDatabase()
  .then(async () => {
    await createUsers();
    await createPosts();
  })
  .catch(console.log);
