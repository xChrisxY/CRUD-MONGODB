const mongoose = require('mongoose');

const clienteSchema = new mongoose.Schema({
  nombre: String,
  direccion: String,
  telefono: String,
  historialCompras: [
    {
      vehiculo: { type: mongoose.Schema.Types.ObjectId, ref: 'Vehiculo' },
      fechaCompra: Date,
      precioCompra: Number,
    },
  ],
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
