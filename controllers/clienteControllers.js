const clienteSchema = require('../models/clientes');

const getClientes = (req, res) => {

      clienteSchema
            .find({})
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));

};

module.exports = {

      getClientes

}