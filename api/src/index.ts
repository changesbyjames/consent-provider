import Fastify from 'fastify'
const server = Fastify();

import { validate } from '@deepkit/type';

interface Person {
  name: string
  age: number
};

console.log(validate<Person>({ name: 'james', age: 1 }));

(async () => {
  try {
    const port = Number(process.env.PORT)
    if (isNaN(port)) throw new Error('Port is not defined.')
    await server.listen({ port });
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
})()