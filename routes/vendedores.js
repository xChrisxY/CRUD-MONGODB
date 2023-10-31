const express = require('express');
const router = express.Router();
const {eliminarVendedor} = require('../controllers/vendedoresControllers');

router.delete('/:id', eliminarVendedor);

module.exports = router;