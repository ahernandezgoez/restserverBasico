const express = require('express');
const cors = require('cors');


class Server {
    
    constructor(){
        this.app = express();
        this.port= process.env.PORT;
        this.usuariosPath = '/api/usuarios';
        //Middlewares
        this.middleWares();
        //Rutas de la app
        this.routes();
    }

    middleWares(){
      //Usa cors para administrar listas blancas y negras del servidor
      this.app.use(cors());
      //lectura y parseo de dato enviado a server
      this.app.use( express.json() );
      //usar directorio public
      this.app.use(express.static('public'));

    }
    routes(){
        this.app.use(this.usuariosPath,require('../routes/usuarios'));
    }

    listen(){
        this.app.listen(this.port, () => {
          console.log(`Example app listening at `, this.port);
        })
    }
}
module.exports = Server;