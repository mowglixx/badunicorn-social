require("dotenv").config()
const mongoose = require("mongoose")

const connection = async () => {
  try {
    await mongoose.connect(process.env.DB_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true
    })
    console.log("Successfully connected to DB")
  } catch (error) {
    console.error(error)
  }
}

connection()
