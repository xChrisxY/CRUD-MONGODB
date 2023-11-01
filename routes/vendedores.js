const express = require('express');
const router = express.Router();
const {eliminarVendedor,putVendedor,postVendedor,getVendedor} = require('../controllers/vendedoresControllers');

router.post('/vendedor', postVendedor);
router.get('/vendedor', getVendedor);
router.put('/vendedor/:id', putVendedor);
router.delete('/vendedor/:id', eliminarVendedor);

module.exports = router;