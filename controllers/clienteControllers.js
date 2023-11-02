const clienteSchema = require('../models/clientes');

const postClient = (req, res) => {
      const nuevoDocumento = new clienteSchema(req.body);
      nuevoDocumento.save()
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }));


}
const getClientes = (req, res) => {

      clienteSchema
            .find({})
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));

};

const putClients = (req, res) => {

      clienteSchema.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }));
            
}

module.exports = {
      postClient,
      putClients,
      getClientes

}