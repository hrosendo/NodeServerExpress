const {response, request} = require('express')

const usuariosGet = (req = request, res = response) => {

    const {nombre, apiKey} = req.query;

    res.json({                
        msg: "get API - Controlador",
        nombre,
        apiKey

    });
}

const usuariosPost = (req, res) => {

    const body = req.body;
    
    res.json({                
        msg: "post API- Controlador",
        body
    })
}
const usuariosPut = (req, res) => {

    const id = req.params.id;
    res.json({                
        msg: "put API -  Controlador",
        id
    })
}
const usuariosDelete = (req, res) => {
    res.json({                
        msg: "delete API-  Controlador"
    })
}
module.exports = {
    usuariosGet,
    usuariosPost,
    usuariosPut,
    usuariosDelete
}