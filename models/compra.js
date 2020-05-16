const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const compraSchema = new Schema({
  
tipo: String,
precioMax: Number,

formaDeCompra : String,
zona : String,
nombre: String,
apellido: String,
numero: Number,
email: String,
comentarios: String

})


const Compra = mongoose.model('Compra', compraSchema);
 module.exports = Compra;