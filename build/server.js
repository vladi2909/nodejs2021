"use strict";
const app = require('./app');
const { PORT } = require('./common/config');
app.listen(PORT, () => process.stdout.write(`App is running on http://localhost:${PORT}`));
