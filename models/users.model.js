/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-12-14 13:14:20
 * @ Description: Manage users endpoint database access
 */

/* SUMMARY
    * Imports
    * Name: getAll
    * Name: getById
    * Name: create
*/

/* Imports */
const db = require("../database")
/***/

/*
* Name: getAll
* Description: Get all users in database
*
* Return (Array): Users list
*/
const getAll = () => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users').then(([users]) => {
            return resolve(users);
        }).catch((err) => {
            console.error(err);
            return reject({
                message: 'Internal Server Error',
                code: 500
            });
        });
    });
}
/***/

/*
* Name: getById
* Description: Get one user by id in database
*
* Args:
* - id (Number): User's id
*
* Return (Object): User's data
*/
const getById = (id) => {
    return new Promise((resolve, reject) => {
        db.query('SELECT * FROM users WHERE id=?', [id]).then(([[user]]) => {
            if (user) return resolve(user);
            else {
                return reject({
                    message: "User Not Found",
                    code: 404
                });
            }
        }).catch((err) => {
            console.error(err);
            return reject({
                message: "Internal Server Error",
                code: 500
            });
        });
    });
}
/***/

/*
* Name: create
* Description: Create new user
*
* Args:
* - email (String): User's mail
* - passwd (String): User's password
*
* Return (Number): New user's id
*/
const create = (email, passwd) => {
    return new Promise((resolve, reject) => {
        db.query('INSERT INTO users (email, passwd) VALUE (?, ?)',
                    [email, passwd]).then(([res]) => {
            return resolve(res.insertId);
        }).catch((err) => {
            console.error(err);
            return reject({
                message: 'Internal Server Error',
                code: 500
            });
        });
    });
}
/***/

module.exports = {
    getAll,
    getById,
    create
}

