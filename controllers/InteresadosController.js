
const Compra = require('../models/compra');
const Vende = require('../models/vende');
const Contacto = require('../models/contacto')
const InteresadoEsp = require('../models/interesadoInmuebleEsp')

  exports.infoEspecifico = ( req, res) => {

    InteresadoEsp.create({

      email: req.body.email,
      nombre: req.body.nombre,
      telefono: req.body.telefono,
      mensaje: req.body.mensaje,
      inmuebleId: req.params
    })
    .then(response => {
      res.json(response);
      })
      .catch(err => {
      res.json(err);
      })


  }



  exports.nuevoContacto = ( req, res) => {

    Contacto.create({

        nombre: req.body.nombre,
        telefono: req.body.telefono,
        email: req.body.email,
        mensaje: req.body.mensaje

    })
    .then(response => {
      res.json(response);
      })
      .catch(err => {
      res.json(err);
      })

  }

  exports.infoSoli = (req, res) => {

        Compra.create({
         
          tipo: req.body.tipo,
          precioMax: req.body.precioMax,
       
          formaDeCompra: req.body.formaDeCompra,
          zona: req.body.zona,
          nombre: req.body.nombre,
          apellido: req.body.apellido,
          numero: req.body.numero,
          email: req.body.email,
          comentarios: req.body.comentarios
        })

        .then(response => {
          res.json(response);
          })
          .catch(err => {
          res.json(err);
          })
   } 

  exports.infoServ = (req, res) => {

        Vende.create({
          nombre: req.body.nombre,
          correo: req.body.correo,
          telefono: req.body.telefono,
          lugar: req.body.lugar,
          tipo: req.body.tipo,
          valorAproximado: req.body.valorAproximado,
          comentarios: req.body.comentarios

        })
        .then(response => {
          res.json(response);
          })
          .catch(err => {
          res.json(err);
          })
  }