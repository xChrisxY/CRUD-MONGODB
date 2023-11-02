const devolucionSchema = require('../models/devoluciones')

const añadirDevolucion = async (req, res) => {

      try {
            const nuevaDevolucion = new devolucionSchema(req.body);

            const devolucionGuardada = await nuevaDevolucion.save();

            res.json(devolucionGuardada);

      } catch (error) {

            res.status(400).json({ error: error.message });
      }
};

const verDevoluciones = async (req, res) => {

      try {

            let lista = []

            const devoluciones = await devolucionSchema.find()
                  .populate('cliente', 'nombre')
                  .populate('vehiculo', 'modelo')
                  .exec();

            devoluciones.forEach(devolucion => {

                  console.log(devolucion.cliente.nombre)
                  console.log(devolucion.montoDevolucion)

                  const informacionDevolucion = {

                        'cliente': devolucion.cliente.nombre,
                        "vendedor": devolucion.vehiculo.modelo,
                        "monto": devolucion.montoDevolucion

                  }

                  lista.push(informacionDevolucion);

            })

            if (lista.length === 0) {

                  res.json("Aún no hay devolciones en la base de datos");

            } else {

                  res.json(lista)

            }


      } catch (error) {

            res.status(400).json({ error: error.message });

      }
};

module.exports = {

      añadirDevolucion,
      verDevoluciones

}