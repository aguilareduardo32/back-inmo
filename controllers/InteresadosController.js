
const Compra = require('../models/compra');
const Anuncia = require('../models/anuncia');

  exports.infoSoli = (req, res) => {

        Compra.create({
          nombre: req.body.nombre,
          aprellido: req.body.aprellido,
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

        Anuncia.create({
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