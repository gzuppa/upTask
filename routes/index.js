const express = require('express')
const router = express.Router()
const proyectoController = require('../controllers/proyectoController')

module.exports = () => {
    //hOME ROUTE
    router.get('/', proyectoController.proyectoHome)
    return router;
}