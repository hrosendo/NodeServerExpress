const express = require('express')
var cors = require('cors')

class Server{

    constructor(){
        this.app = express();
        this.port = process.env.PORT;
        this.usuariosPath = '/api/usuarios'

        //Middlewares
        this.middlewares();

        //Rutas de aplicacion
        this.routes();
    }

    routes(){
       this.app.use(this.usuariosPath, require('../routes/usuarios'))
    }

    listen(){
        this.app.listen(this.port ,()=>{
            console.log(`Servidor corriendo en puerto ${this.port }`);
        })
    }

    middlewares(){
        //CORS
        this.app.use(cors());

        //Lectura y parseo Body
        this.app.use(express.json());

        this.app.use(express.static('public'))
    }
}


module.exports =Server;