const { request, response } = require('express');
const Tarea = require('../models/tarea.model');

const obtenerListado = async (req = request, res = response) => {
    try {
        const list = await Tarea.findAll();
        res.send(list);
    } catch (err) {
        console.error(err);
        res.status(500).send('Ocurrio un error al consultar los registros de la tabla Tareas.');
    }
}

const obtenerListadoPorId = async (req = request, res = response) => {
    try {
        const tarea = await Tarea.findByPk(2);

        res.send(tarea);
    } catch (err) {
        console.error(err);
        res.status(500).send('Ocurrio un error al consultar los registros de la tabla Tareas.');
    }
}

const crearNuevaTarea = async (req = request, res = response) => {

    try {
        const tareaNueva = await Tarea.create({
            titulo: 'tarea nueva',
            descripcion: 'tarea nueva creada para el TP UTN N2.'
        })

        res.status(201).send(tareaNueva);
    } catch (err) {
        console.error(err);
        res.status(500).send('Ocurrio un error al crear registros en la tabla Tareas.');
    }
}

const actualizarTarea = async (req = request, res = response) => {
    try {
        const tareaActualizada = await Tarea.update({ completada: true }, {
            where: {
                id: 2
            }
        });

        res.send({ tareaActualizada });
    } catch (err) {
        console.error(err);
        res.status(500).send('Ocurrio un error al actualizar registros en la tabla Tareas.');
    }
}

const eliminarTarea = async (req = request, res = response) => {
    try {
        const eliminado = await Tarea.destroy({
            where: {
                id: 1
            }
        });
        res.send({eliminado});
    } catch (err) {
        console.error(err);
        res.status(500).send('Ocurrio un error al actualizar registros en la tabla Tareas.');
    }
}

module.exports = {
    obtenerListado,
    obtenerListadoPorId,
    crearNuevaTarea,
    actualizarTarea,
    eliminarTarea
}