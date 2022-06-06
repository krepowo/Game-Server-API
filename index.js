const express = require("express");
const gd = require("gamedig");
const config = require("./config.json");

const app = express();

const port = config.port;

app.get("/", (req, res) => {
    const game = req.query.game;
    const ip = req.query.ip;
    const port = req.query.port;

    gd.query({
        type: game,
        host: ip,
        port: port,
    }).then(jawab => {
        res.send(jawab);
    }).catch(error => {
        res.send({
            status: 404,
            error: error.message
        });
    })
})

app.listen(port, () => {
    console.log("Ready on port " + port);
})