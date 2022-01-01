const { Router } = require('express');
const {
  getUsuarios,
  postUsuarios,
  putUsuarios,
  deleteUsuarios,
} = require('../controllers/usuarios.controller');
const router = Router();

router.get('/', getUsuarios);

router.put('/', putUsuarios);

router.post('/', postUsuarios);

router.delete('/', deleteUsuarios);

module.exports = router;
