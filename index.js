const express = require('express');
const routes = require('./routes');
const path = require('path');
const bodyParser = require('body-parser');

//CREATE DB CONNECTION
const db = require('./config/db');

//IMPORT MODEL
require('./models/Proyectos')

db.sync()
    .then(() => console.log('Conectado al servidor'))
    .catch((error) => console.log(error));

//CREATING SERVER
const app = express();

//LOAD STATICS
app.use(express.static('public'));

//PUG AVAILABILITY (VIEW ENGINE)
app.set('view engine', 'pug');

//ADDING VIEWS
app.set('views', path.join(__dirname, './views'));

//AVAILABLE BODY PARSER
app.use(bodyParser.urlencoded({extended: true}));

app.use('/', routes());
app.listen(5000);