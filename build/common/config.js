"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.path = void 0;
const dotenv = require('dotenv');
exports.path = require('path');
dotenv.config({
    path: exports.path.join(__dirname, '../../.env'),
});
module.exports = {
    PORT: process.env['PORT'],
    NODE_ENV: process.env['NODE_ENV'],
    MONGO_CONNECTION_STRING: process.env['MONGO_CONNECTION_STRING'],
    JWT_SECRET_KEY: process.env['JWT_SECRET_KEY'],
    AUTH_MODE: process.env['AUTH_MODE'] === 'true',
};
