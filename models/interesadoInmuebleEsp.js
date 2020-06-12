const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const interesadoInmuebleEsp = new Schema({

  email: String,
  nombre: String,
  telefono: Number,
  mensaje: String,
  inmuebleId: Object

})


const InteresadoEspe = mongoose.model('InteresadoEspe', interesadoInmuebleEsp);
module.exports = InteresadoEspe;