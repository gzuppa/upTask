const express = require('express');

//CREATING SERVER
const app = express();

//HOME ROUTE
app.use('/', (req, res) => {
    res.send('Hola')
})

app.listen(5000);