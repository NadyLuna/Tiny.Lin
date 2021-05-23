const routes = require("express");

app.get('/teste', (req,res)=>{
    res.json({message: "Endpoint chamado com sucesso!"
    })
})

module.exports = routes;