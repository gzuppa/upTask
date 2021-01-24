const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

//HELPERS
const helpers = require('./helpers')

//CREATE DB CONNECTION
const db = require('./config/db');

//IMPORT MODEL
require('./models/Proyectos')

db.sync()
    .then(() => console.log('Conectado al servidor'))
    .catch((error) => console.log(error));

//CREATING SERVER
const app = express();

//Add express validator
app.use(expressValidator())

//LOAD STATICS
app.use(express.static('public'));

//PUG AVAILABILITY (VIEW ENGINE)
app.set('view engine', 'pug');

//ADDING VIEWS
app.set('views', path.join(__dirname, './views'));

//VAR DUMP TO ALL APP
app.use((req, res, next) => {
    res.locals.vardump = helpers.vardump;
    next();
})

//AVAILABLE BODY PARSER
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());
app.listen(5000);