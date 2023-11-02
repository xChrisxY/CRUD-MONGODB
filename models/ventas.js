const mongoose = require('mongoose');

const ventaSchema = new mongoose.Schema({
  fechaVenta: Date,
  cliente: { type: mongoose.Schema.Types.ObjectId, ref: 'Cliente' },
  vendedor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendedor' },
  vehiculo: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehiculo' },
  pago: Number,
},{
  versionKey : false
});

const Venta = mongoose.model('Venta', ventaSchema);

module.exports = Venta;
