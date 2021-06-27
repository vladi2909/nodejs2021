import { ConnectionOptions } from 'typeorm';
import {
  POSTGRES_DB,
  POSTGRES_HOST,
  POSTGRES_PASSWORD,
  POSTGRES_PORT,
  POSTGRES_USER
} from './config';

const options: ConnectionOptions = {
  type: 'postgres',
  host: POSTGRES_HOST || 'localhost',
  port: +POSTGRES_PORT || 5433,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: true,
  logging: false,
  entities: ['src/entities/**/*.ts']
};

export default options;