const express = require('express');
const router  = express.Router();
const InmueblesController = require('../controllers/InmueblesController');


/* GET home page */
router.get('/inmuebles', InmueblesController.todosInmuebles);
router.get('/:id', InmueblesController.inmuebleEspecifico);
router.post('/create', InmueblesController.crearInmueble)
module.exports = router;
