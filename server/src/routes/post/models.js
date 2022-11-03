const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const handleError = require("../../helpers/errorHandler")

const userSchema = new mongoose.Schema({
  auth: {
    username: {
      type: String,
      required: [true, 'Please enter a username'],
      unique: [true, 'username is take already'],
      lowercase: true
    },
    email: {
      type: String,
      required: [true, 'Please enter an email address'],
      unique: [true, 'this email has been used already'],
      lowercase: true,
      match: /.+\@.+\..+/gi,
    },
    password: {
      type: String,
      required: [true, 'Please enter a password'],
      minLength: 8,
      // password matching tbc
      // match: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm
    },
  }
}
)

// password hasing pre-save TBC
// userSchema.pre('save', next => {

// })

userSchema.methods.generateAuthToken = function () {
  // console.log('token generated')
  return jwt.sign({ id: this._id, auth: {username: this.auth.username} }, process.env.SECRET, {expiresIn: '30m'})
}

userSchema.statics.findByCredentials = async (username, pass) => {
  const user = await User.findOne({ 'auth.username': username })
  if (user && await bcrypt.compare(pass, user.auth.password)) {
    console.log(`${user.auth.username} logged in successfully, ${Date()}`)
    return user
  }
  console.log(`${user.auth.username} failed to log in, ${Date()}`)
  throw handleError(401, 'Username or Password incorrect')
}

const User = mongoose.model("User", userSchema)

module.exports = User
