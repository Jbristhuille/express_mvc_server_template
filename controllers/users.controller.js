/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-12-14 13:09:41
 * @ Description: Users handler functions
 */

/* SUMMARY
    * Name: getAll
    * Name: getById
    * Name: create
*/

/* Imports */
const sha256 = require('js-sha256');
const usersModel = require('../models/users.model');
/***/

/*
* Name: getAll
* Description: Get list of all users
*
* Return (Array): Users list
*/
const getAll = async (req, res) => {
    try {
        const users = await usersModel.getAll();
        return res.status(200).send(users || []);
    } catch(err) {
        res.status(err.code).send(err);
    }
}
/***/

/*
* Name: getById
* Description: Get one user by id
*
* Params:
* - id (Number): User's id
*
* Return (Object): User's data
*/
const getById = async (req, res) => {
    try {
        if (!req.params.id)
            return res.status(400).send({message: "Bad Request", code: 400});

        const user = await usersModel.getById(req.params.id);
        delete user.passwd;
        return res.status(200).send(user);
    } catch (err) {
        return res.status(err.code).send(err);
    }
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
* Return (Object): New user's data
*/
const create = async (req, res) => {
    try {
        if (!req.body.email, !req.body.passwd)
            return res.status(400).send({message: "Bad Request", code: 400});
        
        let id = await usersModel.create(req.body.email, sha256(req.body.passwd));
        return res.status(201).send({
            id: id,
            email: req.body.email
        });
    } catch(err) {
        return res.status(err.code).send(err);
    }
}
/***/

module.exports = {
    getAll,
    getById,
    create
};