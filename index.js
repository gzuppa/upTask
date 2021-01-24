const express = require('express');
const routes = require('./routes');
const path = require('path')

//CREATING SERVER
const app = express();

//LOAD STATICS
app.use(express.static('public'))

//PUG AVAILABILITY (VIEW ENGINE)
app.set('view engine', 'pug');

//ADDING VIEWS
app.set('views', path.join(__dirname, './views'))

app.use('/', routes());
app.listen(5000);