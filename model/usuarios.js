const { model, Schema } = require('mongoose');

const usuarioSchema = Schema({
  nombre: {
    type: String,
    required: [true, 'el nombre es obligatorio'],
  },
  correo: {
    type: String,
    required: [true, 'el correo es obligatorio'],
    unique: true,
  },
  password: {
    type: String,
    required: [true, 'el password es obligatorio'],
  },
  img: {
    type: String,
  },
  role: {
    type: String,
    required: true,
    enum: ['ADMIN_ROLE', 'USER_ROLE'],
  },
  state: {
    type: Boolean,
    default: true,
  },
  google: {
    type: Boolean,
    default: false,
  },
});
module.exports = model('usuario', usuarioSchema);
