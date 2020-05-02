import { Router } from 'express';

const routes = Router();

// eslint-disable-next-line prettier/prettier
routes.get('/', (request, response) =>
  response.json({ message: 'Hello GoStack' }),
);

export default routes;
