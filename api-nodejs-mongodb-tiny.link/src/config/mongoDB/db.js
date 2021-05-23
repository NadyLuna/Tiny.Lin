const mongoose = require('mongoose');
const MONGO_URL = process.env.MONGODB_URL;

function connect () {
mongoose.connect(MONGO_URL,
    { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
    function (error) {
    if(error) {
        console.error("Ocorreu um erro: ", error)
    } else {
        console.log("Conectado no mongoDB.")
    };
    }
);
};

module.exports = { connect }
