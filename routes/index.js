const { Router } = require('express');
const express = require('express');
const router = express.Router();
const proyectoController = require('../controllers/proyectoController');
const { body } = require('express-validator/check');

module.exports = () => {
    //hOME ROUTE
    router.get('/', proyectoController.proyectoHome);
    router.get('/nuevo-proyecto', 
        proyectoController.formularioProyecto);
    router.post('/nuevo-proyecto', 
        body('nombre').not().isEmpty().trim().escape(), //not for negation, trim to delete empty spaces
        proyectoController.nuevoProyecto
    );
    router.get('/proyectos/:url', proyectoController.proyectoPorUrl)
    router.get('/proyecto/editar/:id',
    proyectoController.formularioEditar)

    return router;
}