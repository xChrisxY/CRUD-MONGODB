const vendedores = require('../models/vendedores'); 

const eliminarVendedor = async (req, res) => {
  try {
    const vendedor = await vendedores.findByIdAndDelete(req.params.id);
    if (!vendedor) {
      return res.status(404).json({ message: 'Vendedor no encontrado' });
    }
    res.json({ message: 'Vendedor eliminado exitosamente' });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  eliminarVendedor,
};
