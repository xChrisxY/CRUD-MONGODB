const ventasSchema = require("../models/ventas");
const vendedorSchema=require('../models/vendedores')
const clienteSchema=require('../models/clientes')
const vehiculoSchema=require('../models/vehiculos')

const getVentas = (req, res) => {

  ventasSchema
        .find({})
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));

};

const putVentas = (req, res) => {
  ventasSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
        .then(data => res.json(data))
        .catch(err => res.status(400).json({ error: err.message }));
}

const postVenta = async (req, res) => {
  try {
    const nuevaVenta = new ventasSchema({
      fechaVenta: req.body.fechaVenta,
      cliente: req.body.cliente,
      vendedor: req.body.vendedor,
      vehiculo: req.body.vehiculo,
      pago: req.body.pago,
      devolucion: req.body.devolucion,
    });
    const vendedorB= await vendedorSchema.findById(req.body.vendedor)
if (!vendedorB) {
  return res.status(404).json({ message: 'Vendedor no encontrado' });
}
const clienteB= await clienteSchema.findById(req.body.cliente)
if (!clienteB) {
  return res.status(404).json({ message: 'cliente no encontrado' });
}
const vehiculoB= await vehiculoSchema.findById(req.body.vehiculo)
if (!vehiculoB) {
  return res.status(404).json({ message: 'vehiculo no encontrado' });
}
vendedorB.__v++;
vendedorB.save();
clienteB.__v++;
clienteB.save();
vehiculoB.__v++;
vehiculoB.save();
 const ventaGuardada = await nuevaVenta.save();
    res.status(201).json(vehiculoB);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getVentas,
  putVentas,
  postVenta,
};
