const express = require('express');
const exphsb = require('express-handlebars');
const bodyParser = require('body-parser');
const path = require('path');
const db = require('./config/database');

const app = express();
const PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json())

app.get('/', (req, res) => res.render('home', { layout: 'landing' }));
app.use('/jobs', require('./routes/jobs'));


//set handlebars engine
app.engine('handlebars', exphsb({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');
app.use(express.static(path.join(__dirname, 'public')));


// Authenticating Database
db.authenticate()
    .then(() => console.log("Database authentication successfull"))
    .catch((err) => console.log("ERROR: " + err));


app.listen(PORT, console.log(`Server started at port ${PORT}`));

