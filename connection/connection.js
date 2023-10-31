const mongoose = require('mongoose');
require('dotenv').config()

const API_URL = process.env.DB_URL;

const connectToDatabase = async () => {

      console.log("holaa")

      try {

            await mongoose.connect(`${API_URL}`, {useUnifiedTopology : true});
            console.log("Connection completed")

      } catch (error) {

            console.log("Error connecting to MongoDB: " , error)
      }

}

module.exports = connectToDatabase;