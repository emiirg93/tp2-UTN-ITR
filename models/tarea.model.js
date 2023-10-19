const { DataTypes } = require('sequelize');
const sequelize = require('../utils/db.config');

const Tarea = sequelize.define('Tarea', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    titulo: DataTypes.STRING,
    descripcion: DataTypes.STRING,
    completada: {
        type: DataTypes.BOOLEAN,
        defaultValue: false
    }
});

Tarea.sync();

module.exports = Tarea;