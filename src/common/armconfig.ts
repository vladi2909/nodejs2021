import { ConnectionOptions } from 'typeorm';

import { POSTGRES_DB, POSTGRES_HOST, POSTGRES_PASSWORD, POSTGRES_PORT, POSTGRES_USER } from './config';

const postgresOptions: ConnectionOptions = {
  type: 'postgres',
  host: POSTGRES_HOST || 'localhost',
  port: +POSTGRES_PORT || 5433,
  username: POSTGRES_USER,
  password: POSTGRES_PASSWORD,
  database: POSTGRES_DB,
  synchronize: false,
  logging: false,
  entities: ['src/entity/**/*.ts'],
  migrations: ['src/migration/**/*.ts'],
  cli: {
    entitiesDir: 'src/entity',
    migrationsDir: 'src/migration',
    subscribersDir: 'src/subscriber',
  }
};

export = postgresOptions;