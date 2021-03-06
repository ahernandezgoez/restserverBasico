const { Router } = require('express');
const { usuariosDelete, usuariosGet, usuariosPut, usuariosPost, usuariosPatch } = require('../controllers/usuarios');

const router = Router();

router.get('/', usuariosGet);  

router.put('/:id', usuariosPut);  

router.post('/', usuariosPost);  

router.patch('/', usuariosPatch); 

router.delete('/', usuariosDelete);      


module.exports = router;