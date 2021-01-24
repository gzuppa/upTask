const express = require('express')
const router = express.Router()
const proyectoController = require('../controllers/proyectoController')

module.exports = () => {
    //hOME ROUTE
    router.get('/', proyectoController.proyectoHome);
    router.get('/nuevo-proyecto', proyectoController.formularioProyecto)
    return router;
}