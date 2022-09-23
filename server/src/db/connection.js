require("dotenv").config();
const mongoose = require("mongoose");

const connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI);
    console.log("Successfully connected");
  } catch (error) {
    console.log(error);
  }
};

connection();
