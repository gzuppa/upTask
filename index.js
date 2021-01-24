const express = require('express');
const routes = require('./routes')

//CREATING SERVER
const app = express();

app.use('/', routes());
app.listen(5000);