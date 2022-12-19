/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-12-14 13:08:04
 * @ Description: Users endpoint router
 */

/* SUMMARY
    * Imports
*/

/* Imports */
const express = require('express');
const usersController = require('../controllers/users.controller');
const router = express.Router();
/***/

router.get('/', usersController.getAll);
router.get('/:id', usersController.getById);
router.post('/', usersController.create);

module.exports = router;
