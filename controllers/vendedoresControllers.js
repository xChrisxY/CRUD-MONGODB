const vendedores = require('../models/vendedores'); 
const ventasSchema=require('../models/ventas')

const postVendedor = (req, res) => {
      const nuevoDocumento = new vendedores(req.body);
      nuevoDocumento.save()
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }));


}
const getVendedor = (req, res) => {

      vendedores
            .find({})
            .then((data) => res.json(data))
            .catch((error) => res.json({ message: error }));

};

const putVendedor = (req, res) => {
      vendedores.findByIdAndUpdate(req.params.id, req.body, { new: true })
            .then(data => res.json(data))
            .catch(err => res.status(400).json({ error: err.message }));
}

const eliminarVendedor = async (req, res) => {
  try {
    const vendedor1 = await vendedores.findById(req.params.id);
    if (!vendedor1) {
      return res.status(404).json({ message: 'Vendedor no encontrado' });
    }
    const ventas =await ventasSchema.findByIdAndDelete({vendedor:vendedor1.id})
    res.json({ ventas });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  postVendedor,
  getVendedor,
  putVendedor,
  eliminarVendedor,
};
