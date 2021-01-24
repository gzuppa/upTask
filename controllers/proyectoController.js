const Proyectos = require('../models/Proyectos')

exports.proyectoHome = (req, res) => {
    res.render('index', {
        nombrePagina: 'Proyectos'
    })
};

exports.formularioProyecto = (req, res) => {
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto'
    })
}

exports.nuevoProyecto = (req, res) => {
    //Send to console
    // console.log(req.body)

    //Validate input filled
    const {nombre} = req.body;
    let errores = [];
    if (!nombre) {
        errores.push({'texto': 'Agrega un nombre al proyecto'})
    }
    //IF ERROR EXISTS
    if (errores.length > 0){
        res.render('nuevoProyecto', {
            nombrePagina: 'Nuevo Proyecto',
            errores
        })
    } else {
        //NO ERRORS, INSERT ON DATABASE
        Proyectos.create({ nombre })
            .then(()=> console.log('Insertado correctamente'))
            .catch(error => console.log(error));
    }
}