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
    console.log(req.body)
}