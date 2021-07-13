const express = require('express');
const exphsb = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');

const db = require('./config/database');

const app = express();

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => res.send('STARED'));


db.authenticate()
    .then(() => console.log("Database connected"))
    .catch((err) => console.log("ERROR: " + err));


app.listen(PORT, console.log(`Server started at port ${PORT}`))

