const express = require('express');
const router = express.Router();
const {postVenta} = require('../controllers/ventasControllers')


router.post('/ventas', postVenta);

module.exports = router;