require('dotenv').config();
const express = require('express');
const path = require('path');
const cors = require('cors');
const { makeConnecton } = require('../database/config');

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.usuariosPath = '/api/usuarios';
    // Conexion a la base de datos
    this.conectardb();
    // Middlewares
    this.middlewares();

    // Rutas de la aplicacion
    this.rutas();
  }

  async conectardb() {
    await makeConnecton();
  }

  rutas() {
    this.app.use(this.usuariosPath, require('../routes/usuarios.routes'));
  }

  middlewares() {
    // Configuracion de los archivos estaticos
    this.app.use(express.static(path.resolve(__dirname, '../public')));
    // Uso de cors
    this.app.use(cors());
    // Lectura y parseo del body
    this.app.use(express.json());
  }

  start() {
    this.app.listen(this.port, () => {
      console.log(`server started at: ${this.port}`);
    });
  }
}

module.exports = Server;
