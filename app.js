const express = require("express");
const body_parser = require('body-parser');
const config = require('./config.js');

const app = express();

app.listen(config.node_port, () => {
    console.log(config.node_port)
});

app.use(body_parser.json());
app.use(body_parser.urlencoded({
    extended: true
}));

const api = require('./controllers/api');
api.initializeApp(app);
