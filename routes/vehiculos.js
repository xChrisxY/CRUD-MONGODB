const express = require('express');
const router = express.Router();
const {postVehiculo,putVehiculo,getVehiculo}=require('../controllers/vehiculosController')


router.post('/vehiculo',postVehiculo);
router.get('/vehiculo',getVehiculo);
router.put('/vehiculo/:id',putVehiculo);


module.exports=router;