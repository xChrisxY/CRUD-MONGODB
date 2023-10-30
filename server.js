const express = require('express');
const connectToDatabase = require('./connect/connection')
require('dotenv').config();

const app = express();
app.use(express.json());
const PORT = process.env.PORT || 3000


connectToDatabase();

const cliente = require('./routes/clientes');
app.use('/api', cliente)


app.listen(PORT, () => {

      console.log(`Servidor escuchando en el puerto ${PORT}`)

})
