const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const contactoScheme = new Schema({

    nombre:  String,
    email: String,
    telefono: Number,
    mensaje: String


})

const Contacto = mongoose.model('Contacto', contactoScheme);
module.exports = Contacto;