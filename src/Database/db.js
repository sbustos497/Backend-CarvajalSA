import Sequalize from 'sequelize';
import {DB_HOST,DB_NAME,DB_PASS,DB_USER} from '../config.js';

export const sequelize = new Sequalize (DB_NAME, DB_USER, DB_PASS, {
    host: DB_HOST,
    dialect: 'mysql'
});
