const vehiculosSchema = require('../models/vehiculos');

const postVehiculo = (req, res) => {
      const nuevoDocumento = new vehiculosSchema(req.body);
      nuevoDocumento.save()
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }));


}
const getVehiculo = (req, res) => {

      vehiculosSchema
            .find({})
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));

};

const putVehiculo = (req, res) => {
      vehiculosSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }));
}

module.exports = {
      postVehiculo,
      putVehiculo,
      getVehiculo

}