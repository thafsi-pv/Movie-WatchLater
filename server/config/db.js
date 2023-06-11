const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const {connection} = await mongoose.connect(process.env.MONGODB_CONNECTION);
    console.log("database connected at host: " + connection.host);
  } catch (error) {
    console.log(error);
  }
};

module.exports = connectDb;
