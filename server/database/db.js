const mongoose = require('mongoose')

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('MongoDB connected Successfully')
  } catch (error) {
    console.log('Error occured to connect db', error)
  }
}

module.exports = connectDB