const router = require('express').Router();

const {
    obtenerListado,
    obtenerListadoPorId,
    crearNuevaTarea,
    actualizarTarea,
    eliminarTarea
} = require('../controllers/tarea.controller');


router.get('/', obtenerListado);

router.get('/:id', obtenerListadoPorId);

router.post('/', crearNuevaTarea);

router.put('/:id', actualizarTarea);

router.delete('/:id', eliminarTarea);

module.exports = router;