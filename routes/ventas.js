const express = require('express');
const router = express.Router();
const {postVenta,putVentas,getVentas} = require('../controllers/ventasControllers')


router.post('/ventas', postVenta);
router.get('/ventas',getVentas)
router.put('/ventas/:id',putVentas)


module.exports = router;