const Terminos = require('../models/terminoModel');
//obtenemos todos los terminos
exports.getTerminos = (req, res) =>{
    Terminos.findAll()
    .then(terminos => {
        res.json(terminos);
    })
    .catch(err => {
        res.status(500).json({ error: 'Error al obtener los términos' });
    });
};
//obtenemos un termino por id
exports.getTerminoById = (req, res) => {
    const id = req.params.id;
    Terminos.findById(id)
    .then(termino => {
        if (!termino) {
            return res.status(404).json({ error: 'Término no encontrado' });
        }
        res.json(termino);
    })
    .catch(err => {
        res.status(500).json({ error: 'Error al obtener el término' });
    });
};
//creamos un termino
exports.createTermino = (req, res) => {
    const {  Termino, Descripcion, FechaCreacion, ImagenUrl, Link, NombreArchivo } = req.body;
    console.log('estoy en el controller crear termino')
    const fecha = new Date()
    Terminos.createTer({ Termino, Descripcion, fecha, ImagenUrl, Link})
    .then(termino => {
        res.status(201).json(termino);
    })
    .catch(err => {
        res.status(500).json({ error: 'Error al crear el término, error: ' + err });
    });
};


//actualizamos un termino
exports.actualizarTermino = (req, res) => {
    const id = req.params.id;
    const { Termino, Descripcion, ImagenUrl, Link } = req.body;
    console.log('estoy en el controller update termino')
    const now = new Date();
    const FechaModificacion = new Date();
    // const fechaModificacion = horaChile.toISOString().slice(0, 10);
    
    Terminos.updateTer(id, { Termino, Descripcion, FechaModificacion, ImagenUrl, Link })
    .then(termino => {
        if (!termino) {
            return res.status(404).json({ error: 'Término no encontrado' });
        }
        res.json(termino);
    })
    .catch(err => {
        res.status(500).json({ error: 'Error al actualizar el término: ' + err });
    });
};

//eliminamos un termino

exports.deleteTermino = (req, res) => {
    const id = req.params.id;
    Terminos.deleteTer(id)
    .then(termino => {
        if (!termino) {
            return res.status(404).json({ error: 'Término no encontrado' });
        }
        res.json({ message: 'Término eliminado correctamente' });
    })
    .catch(err => {
        res.status(500).json({ error: 'Error al eliminar el término' });
    });
};