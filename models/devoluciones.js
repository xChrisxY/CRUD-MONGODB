const mongoose = require('mongoose');

const devolucionSchema = new mongoose.Schema({
      cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
      vehiculo: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehiculo' },
      montoDevolucion: Number,
}, {
      versionKey:false
});

const Devolucion = mongoose.model('Devolucion', devolucionSchema);

module.exports = Devolucion