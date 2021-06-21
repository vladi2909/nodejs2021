const app = require('./app');
const { PORT } = require('./common/config');

import { createConnection } from 'typeorm';
import { config } from './common/ormconfig';

createConnection(config)
  .then(async (connection) => {
    console.log(connection);
    app.listen(PORT, () => {
      process.stdout.write(`App is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => console.log('connection error: ', error));