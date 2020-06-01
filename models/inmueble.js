const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const inmuebleSchema = new Schema({
  titulo: {
    type: String,
  },
  tipo: {
    type: String,
    enum: ["VENTA", "RENTA"],
  },
  dueño: {
    type: String,
  },
  recamaras: Number,
  descripcion: String,
  metros: Number,
  colonia: String,
  calle: String,
  precio: Number,
  delegacion: String,
  baños: Number,
  vendedor: String,
  telefono: Number,
  image1: { type: String, required: false },
  image2: { type: String, required: false },
  image3: String,
  images: [String],
});
/* const inmuebleSchema = new Schema({
  titulo: String,
  tipo: String,
  dueño: String,
  recamaras: Number,
  descripcion: String,
  metros: Number,
  colonia: String,
  calle: String,
  precio: Number,
  delegacion: String,
  baños: Number,
  telefono: Number,
  image1: String,
  image2: String,
  image3: String,
  images: { type: String, value: [String] },
}); */

const Inmueble = mongoose.model("Inmueble", inmuebleSchema);
module.exports = Inmueble;
