const express = require('express');
const router = express.Router();
const InteresadosController = require('../controllers/InteresadosController');


router.post('/infoCompra', InteresadosController.infoSoli);
router.post('/infoServ', InteresadosController.infoServ);
router.post('/contacto', InteresadosController.nuevoContacto);
module.exports = router;