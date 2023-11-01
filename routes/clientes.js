const express = require('express');
const router = express.Router();
const { getClientes,putClients,postClient } = require('../controllers/clienteControllers')

router.post('/clientes',postClient)
router.get('/clientes', getClientes);
router.put('/clientes/:id',putClients)



module.exports = router
