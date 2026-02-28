const mongoose = require("mongoose");

const MONGO_URL = process.env.MONGO_CONNECT;

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(MONGO_URL);
    console.log("Database connection successful");
  } catch (err) {
    console.log(err);
  }
};

connectDB();

module.exports = connectDB;
