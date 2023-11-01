const express = require('express');
const connectToDatabase = require('./connection/connection')
require('dotenv').config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000


connectToDatabase();

const cliente = require('./routes/clientes');
const ventas =require('./routes/ventas')
const vehiculo=require('./routes/vehiculos')
const vendedor =require('./routes/vendedores')
app.use('/api',vehiculo)
app.use('/api',ventas)
app.use('/api', cliente)
app.use('/api',vendedor)


app.listen(PORT, () => {

      console.log(`Servidor escuchando en el puerto ${PORT}`)

})
