import path from 'path';
import dotenv from 'dotenv';
import { ConnectionOptions } from 'typeorm';

dotenv.config({
  path: path.join(__dirname, '../../.env'),
});

export const config = ({
  type: 'postgres',
  name: 'my-connection',
  synchronize: true,
  host: process.env['POSTGRES_HOST'],
  port: process.env['POSTGRES_PORT'],
  username: process.env['POSTGRES_USER'],
  password: process.env['POSTGRES_PASSWORD'],
  dbname: process.env['POSTGRES_DB'],
  autoReconnect: true,
  recoonectTries: Number.MAX_VALUE,
  recconectionInterval: 1000,
} as unknown) as ConnectionOptions;