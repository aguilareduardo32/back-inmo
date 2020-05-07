const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const anunciascheme = new Schema({

  nombre: {
    required: true,
    type: String,

  },
  correo: {
    required: true,
    type: String,
  }
  ,
  telefono : {
    required: true,
    type: Number,
  },

  lugar: {
    required: true,
    type: String,
  },
  tipo: {
    required: true,
    type: String,
    enum: ['Depto','Casa']
  },
  valorAprox: String,
  comentarios: String


})

const Anuncia = mongoose.model('Anuncia', anunciascheme);
module.exports = Anuncia;