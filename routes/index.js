const { Router } = require('express');
const express = require('express')
const router = express.Router()
const proyectoController = require('../controllers/proyectoController')

module.exports = () => {
    //hOME ROUTE
    router.get('/', proyectoController.proyectoHome);
    router.get('/nuevo-proyecto', proyectoController.formularioProyecto);
    router.post('/nuevo-proyecto', proyectoController.nuevoProyecto);
    return router;
}