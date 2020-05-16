const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const vendeScheme = new Schema({

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
    
  },
  valorAproximado: String,
  comentarios: String


})

const Vende = mongoose.model('Vende', vendeScheme);
module.exports = Vende;