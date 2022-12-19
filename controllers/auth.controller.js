/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-12-19 10:09:55
 * @ Description: Manage user connection
 */

/* SUMMARY
    * Imports
    * Name: auth
*/

/* Imports */
const usersModel = require('../models/users.model');
const sha256 = require('js-sha256');
const jwt = require('jsonwebtoken');
/***/

/*
* Name: auth
* Description: Connect user 
*
* Body:
* - email (String): User login
* - passwd (String): User password
*
* Return (Array): Users data and token
*/
const auth = async (req, res) => {
    try {
        const {email, passwd} = req.body;

        if (email && passwd) {
            const user = await usersModel.getByLogin(email, sha256(passwd));
            
            delete user.passwd;
            user['token'] = jwt.sign(user, process.env.SECRET);

            return res.status(200).send(user);
        } else {
            return res.status(400).send({message: "Bad Request", code: 400});
        }
    } catch (err) {
        return res.status(err.code).send(err);
    }
};
/***/

module.exports = {
    auth
};