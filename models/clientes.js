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
}, {
  versionKey : false
});

const Cliente = mongoose.model('Cliente', clienteSchema);

module.exports = Cliente;
