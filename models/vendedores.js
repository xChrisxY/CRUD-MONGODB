const mongoose = require('mongoose');

const vendedorSchema = new mongoose.Schema({
  nombre: String,
  edad: Number,
  contacto: String,
});

const Vendedor = mongoose.model('Vendedor', vendedorSchema);

module.exports = Vendedor;
