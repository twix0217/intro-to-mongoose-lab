const dotenv = require("dotenv"); // require package
dotenv.config(); 
const mongoose = require('mongoose');

const customerSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true }
});

const Customer = mongoose.model('Customer', customerSchema);

module.exports = Customer;

  // Connect to MongoDB using the connection string in the .env file
  mongoose.connect(process.env.MONGODB_URI);
  // log connection status to terminal on start
  mongoose.connection.on("connected", () => {
      console.log(`Connected to MongoDB ${mongoose.connection.name}.`);
    });