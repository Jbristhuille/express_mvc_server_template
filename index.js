/**
 * @ Author: Jbristhuille
 * @ Create Time: 2022-12-14 12:56:58
 * @ Description: Server root
 */

/* SUMMARY
    * Imports
    * Server config
    * Routes
    * Start server
*/

/* Imports */
require('dotenv').config();
const express = require('express');
const cors = require('cors');
const app = express();
/***/

/* Server config */
app.use(express.json());
app.use(cors());
/***/

/* Routes */
const usersRouter = require('./routers/users.router');
const authRouter = require('./routers/auth.router');
const gifsRouter = require('./routers/gifs.router');
app.use('/users', usersRouter);
app.use('/auth', authRouter);
app.use('/gifs', gifsRouter);
/***/

/* Start server */
app.listen(process.env.PORT, () => {
    console.log(`Server start on port ${process.env.PORT}`);
});
/***/