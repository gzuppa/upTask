const express = require('express')
const router = express.Router()

module.exports = () => {
    //hOME ROUTE
    router.get('/', (req, res) => {
        res.send('Bienvenido')
    });
    router.get('/nosotros', (req, res) => {
        res.send('Nosotros')
    });
    return router;
}