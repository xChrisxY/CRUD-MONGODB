const mongoose = require('mongoose');

const vehiculoSchema = new mongoose.Schema({
  modelo: String,
  año: Number,
  color: String,
  precio: Number,
  nuevo: Boolean, 
}, {
  versionKey : false
});

const Vehiculo = mongoose.model('Vehiculo', vehiculoSchema);

module.exports = Vehiculo;
