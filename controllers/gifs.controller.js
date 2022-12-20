const gifsModel = require('../models/gifs.model');

const getAll = (req, res) => {
    gifsModel.findAll().then(([gifs]) => {
        const {nb} = req.query;
        if (nb != null) gifs = gifs.slice(0, nb);

        return res.status(200).send(gifs);
    }).catch((err) => {
        console.error(err);
        return res.status(500).send('Internal Server Error');
    });
};

module.exports = {
    getAll
};