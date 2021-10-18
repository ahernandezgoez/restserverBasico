const { response } = require('express');


const usuariosGet = (req, res = response) => {
    const params = req.query;
    res.json({
        nombre: 'Antonio',
        Apellido: 'get - Controlador',
        params
    });
  }
const usuariosPost = (req, res) => {
    const {nombre, edad} = req.body;
    res.json({
        nombre,
        edad
    });
  }
const usuariosPatch = (req, res) => {
    res.json({
        nombre: 'Antonio',
        Apellido: 'patch - controlador'
    });
  }
const usuariosPut = (req, res) => {
    const id = req.params.id;
    res.json({
        msg: 'Put -controlador',
        id
    })
}
const usuariosDelete = (req,res ) => {
    res.json({
        msg: 'Delete'
    })
}
  module.exports = {
      usuariosGet,
      usuariosPatch,
      usuariosPost,
      usuariosPut,
      usuariosDelete
  }