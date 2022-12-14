/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-12-14 13:02:04
 * @ Description: Manage SQL connection pool
 */

/* SUMMARY
    * Imports
*/

/* Imports */
const mysql = require('mysql2/promise');
/***/

const database = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWD,
    database: process.env.DB_NAME
});

module.exports = database;