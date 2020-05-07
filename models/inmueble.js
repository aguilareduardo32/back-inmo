 const mongoose = require('mongoose');
 const Schema   = mongoose.Schema;

 const anuncioSchema = new Schema({
   titulo: {
     type: String,

   },
   tipo:{
     type: String,
     enum: ['VENTA', 'RENTA']
   },
   dueño: {
     type:String
   }
   ,
   recamaras: Number,
   descripcion: String,
   metros: Number,
   colonia: String,
   calle:String,
   precio:Number,
   delegacion:String,
   baños: Number,
   telefono:Number,
   fotos:  [{ type: String,  }]
     
   }
   
 , 
{
   timestamps: true
 });

 const Anuncio = mongoose.model('Anuncio', anuncioSchema);
 module.exports = Anuncio;