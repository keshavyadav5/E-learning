const express = require('express');
const app = express();
const dotenv = require('dotenv')
const cors = require('cors')
const cookieParser = require('cookie-parser')
dotenv.config({});

const userRoute = require('./routes/user.route')
const connectDB = require('./database/db')

app.use(express.json())
app.use(cookieParser())
app.use(cors({
  origin: 'http://localhost:5173/',
  credentials: true,
}))
// apis
app.use('/api/v1/user', userRoute)
const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`server is runnging on ${PORT}`)
  connectDB()
})