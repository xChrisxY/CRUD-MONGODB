const ventasSchema = require("../models/ventas");
const vendedorSchema = require('../models/vendedores')
const clienteSchema = require('../models/clientes')
const vehiculoSchema = require('../models/vehiculos')

const getVentas = async (req, res) => {

  try {

    let lista = [];

    const ventas = await ventasSchema.find()
      .populate('cliente', 'nombre')
      .populate('vendedor', 'nombre')
      .populate('vehiculo', 'modelo')
      .exec();

    ventas.forEach(venta => {

      console.log("Cliente: ", venta.cliente.nombre);
      console.log('Vendedor:', venta.vendedor.nombre);
      console.log('Vehículo:', venta.vehiculo.modelo);
      console.log('Pago:', venta.pago);

      const informacionVenta = {

        "cliente": venta.cliente.nombre,
        "vendedor": venta.vendedor.nombre,
        "vehiculo": venta.vehiculo.modelo,
        "pago": venta.pago

      }

      lista.push(informacionVenta);

    })

    if (lista.length === 0) {

      res.json("Aún no hay ventas en la base de datos");

    } else {

      res.json(lista)

    }

  } catch (error) {

    res.json("Ha ocurrido un error", error);

  }


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

    const vendedorB = await vendedorSchema.findById(req.body.vendedor)

    if (!vendedorB) {
      return res.status(404).json({ message: 'Vendedor no encontrado' });
    }

    const clienteB = await clienteSchema.findById(req.body.cliente)

    if (!clienteB) {
      return res.status(404).json({ message: 'cliente no encontrado' });
    }

    const vehiculoB = await vehiculoSchema.findById(req.body.vehiculo)
    if (!vehiculoB) {
      return res.status(404).json({ message: 'vehiculo no encontrado' });
    }


    clienteB.historialCompras.push(
      {
        "vehiculo": req.body.vehiculo,
        "fechaCompra" : Date.now(),
        "precioCompra" : req.body.pago

      })

    await nuevaVenta.save();
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
