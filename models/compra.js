const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const contrataSchema = new Schema({
nombre: String,
apellido: String,
numero: Number,
email: String,
comentarios: String

})


const Contrata = mongoose.model('Contrata', contrataSchema);
 module.exports = Contrata;