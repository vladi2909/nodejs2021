const app = require('./app');
const { PORT } = require('./common/config');

import { TryDBConnect } from './common/DBconnection';

TryDBConnect(() => {
  app.listen(PORT, () => {
    process.stdout.write(`App is running on http://localhost:${PORT}`);
  });
});