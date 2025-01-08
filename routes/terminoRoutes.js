const express = require('express');
const router = express.Router();
const terminosController = require('../controllers/terminoController');

router.get('/', terminosController.getTerminos); // Ruta para obtener todos los terminos
router.get('/:id', terminosController.getTerminoById); // Ruta para obtener un termino por ID
router.post('/',express.json(), terminosController.createTermino); // Ruta para crear un nuevo termino
router.put('/:id',express.json(), terminosController.actualizarTermino); // Ruta para actualizar un termino por ID
router.delete('/:id', terminosController.deleteTermino); // Ruta para eliminar un termino por ID
module.exports = router;