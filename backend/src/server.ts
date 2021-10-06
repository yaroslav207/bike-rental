import { join } from 'path';
import express, { json, urlencoded } from 'express';
import Knex from 'knex';
import { Model } from 'objection';
import { ENV } from './common/enums/enums';
import knexConfig from '../knexfile';

const app = express();

Model.knex(Knex(knexConfig[ENV.APP.NODE_ENV]));

app.use(json({ limit: '100mb' }));
app.use(urlencoded({ extended: true, limit: '100mb' }));

app.use(express.static(join(__dirname, '../public')));
app.use('*', (_req, res) => {
  return res.sendFile(join(__dirname, '../public', 'index.html'));
});

const server = app.listen(ENV.APP.SERVER_PORT, () => {
  console.log(
    `Listening to connections on Port — ${ENV.APP.SERVER_PORT}, Environment: ${ENV.APP.NODE_ENV}`,
  );
});

export { server };
