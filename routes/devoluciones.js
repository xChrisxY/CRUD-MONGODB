const express = require('express');
const router = express.Router();
const {añadirDevolucion, verDevoluciones} = require('../controllers/devolucionesControllers')

router.get('/devoluciones', verDevoluciones)
router.post('/devoluciones', añadirDevolucion)

module.exports = router