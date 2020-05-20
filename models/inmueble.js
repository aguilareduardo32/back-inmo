 const mongoose = require('mongoose');
 const Schema   = mongoose.Schema;

 const inmuebleSchema = new Schema({
   titulo: {
     type: String},
   tipo:{
     type: String,
     enum: ['VENTA', 'RENTA']},
   dueño: {
     type:String
   },
   recamaras: Number,
   descripcion: String,
   metros: Number,
   colonia: String,
   calle:String,
   precio:Number,
   delegacion:String,
   baños: Number,
   telefono:Number,
   image:  [{ type: String, required: true }]
   
 });

 const Inmueble = mongoose.model('Inmueble', inmuebleSchema);
 module.exports = Inmueble;