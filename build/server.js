"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const app_1 = require("./app");
const { PORT } = require('./common/config');
app_1.app.listen(PORT, () => process.stdout.write(`App is running on http://localhost:${PORT}`));
