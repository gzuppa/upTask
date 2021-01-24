const Proyectos = require('../models/Proyectos')

exports.proyectoHome = async (req, res) => {
    const proyectos = await Proyectos.findAll()
    res.render('index', {
        nombrePagina: 'Proyectos',
        proyectos
    })
};

exports.formularioProyecto = async (req, res) => {
    const proyectos = await Proyectos.findAll()
    res.render('nuevoProyecto', {
        nombrePagina: 'Nuevo Proyecto',
        proyectos
    })
}

exports.nuevoProyecto = async (req, res) => {
    const proyectos = await Proyectos.findAll()
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
            errores,
            proyectos
        })
    } else {
        //NO ERRORS, INSERT ON DATABASE
        const proyecto = await Proyectos.create({ nombre });
        res.redirect('/');
    }
}

exports.proyectoPorUrl = async (req, res) => {
    const proyectos = await Proyectos.findAll()
    const proyecto =  await Proyectos.findOne({
        where: {
            url: req.params.url
        }
    })
    if(!proyecto) return next()
    res.render('tareas', {
        nombrePagina: 'Tareas del Proyecto',
        proyecto,
        proyectos
    })
}