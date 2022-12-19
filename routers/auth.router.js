/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-12-19 10:12:36
 * @ Description: Manage authentification endpoint
 */

/* SUMMARY
    * Imports
*/

/* Imports */
const express = require('express');
const authController = require('../controllers/auth.controller');
const router = express.Router();
/***/

/* Routes */
router.post('/', authController.auth);
/***/

module.exports = router;