const express = require('express');
const router = express.Router();
const { getClientes } = require('../controllers/clienteControllers')

router.get('/clientes', getClientes);


module.exports = router
