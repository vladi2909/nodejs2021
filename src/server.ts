const app = require('./app');
const { PORT } = require('./common/config');
const postgresOptions = require('./common/armconfig');
import { createConnection } from 'typeorm';

createConnection(postgresOptions)
  .then(async (connection) => {
    await connection.runMigrations();
    console.log('connection is:', connection);
    app.listen(PORT, () => {
      console.log(`App is running on http://localhost:${PORT}`);
    });
  })
  .catch((err) => console.log('Postgres connection error: ', err.message));