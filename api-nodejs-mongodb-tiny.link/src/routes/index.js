const routes = require('express').Router();
const UserController = require('./controllers/UserController');
routes.get("/", (req, res) => {
    res.status(200).send({
        title:'Projeto FullStack - Crescere By grupo o Boticário',
        project: 'Tiny.Lin',
        version: "1.0.0",

    });
});

module.exports = routes;
