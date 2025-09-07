const User = require("../models/user.model");
const bcryptjs = require('bcryptjs')
const generateToken = require('../utils/generateToken')

const register = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required"
      })
    }
    const user = await User.findOne({ email });
    if (user) {
      return res.status(400).json({
        success: false,
        message: "User already exist"
      })
    }
    const hassPassword = await bcryptjs.hash(password, 10)
    await User.create({
      name, email, password: hassPassword
    })
    return res.status(201).json({
      success: true,
      message: "User created Successfully"
    })
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "Internal Server error"
    })
  }
}

const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "All Fields are required"
      })
    }
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({
        success: false,
        message: "User not exist"
      })
    }
    const isPassword = await bcryptjs.compare(password, user.password)
    if (!isPassword) {
      return res.status(400).json({
        success: false,
        message: "Invalid email or password"
      })
    }
    generateToken(res,user, `Welcome back ${user.name}`)
  } catch (error) {
    console.log(error)
    return res.status(500).json({
      success: false,
      message: "Internal Server error"
    })
  }
}


module.exports = {
  register,
  login
}