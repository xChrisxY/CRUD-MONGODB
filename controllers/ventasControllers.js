const ventasSchema = require("../models/ventas");

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

    const ventaGuardada = await nuevaVenta.save();
    res.status(201).json(ventaGuardada);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getVentas,
  putVentas,
  postVenta,
};
