const db = require('../database');

const findAll = () => {
    return db.query('SELECT * FROM gifs');
};

module.exports = {
    findAll
}