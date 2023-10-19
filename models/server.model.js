const express = require('express');
const tareasRoutes = require('../routes/tarea.routes');
const sequelize = require('../utils/db.config')

class Server {

    constructor() {
        this.app = express();
        this.port = 4000;
        this.paths = {
            tareas: '/api/tareas'
        }

        this.middlewares();
        this.routes();
        this.dbConnection();
    }

    middlewares() {
        this.app.use(express.json());
    }

    routes() {
        this.app.use(this.paths.tareas,tareasRoutes);
    }

    listen() {
        this.app.listen(this.port, () => {
            console.log(`servidor corriendo en http://localhost:${this.port}/`);
        });
    }

    async dbConnection(){
        try {
            await sequelize.authenticate();
            console.log('Connection has been established successfully.');
          } catch (error) {
            console.error('Unable to connect to the database:', error);
          }
    }
}

module.exports = Server;