const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const handleError = require("../../helpers/errorHandler")

const userSchema = new mongoose.Schema({
  auth: {
    username: {
      type: String,
      required: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      match: /.+\@.+\..+/gi,
    },
    password: {
      type: String,
      required: true,
      // at least 8 chars, 1 upper, 1 lower and 1 special char
      // match: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/g
    },
  }
}
)

userSchema.methods.generateAuthToken = function () {
  console.log('token generated')
  return jwt.sign({ id: this._id, auth: {username: this.auth.username} }, process.env.SECRET, {expiresIn: '30m'})
}

userSchema.statics.findByCredentials = async (username, pass) => {
  const user = await User.findOne({ 'auth.username': username })
  console.log(user)
    if (user && await bcrypt.compare(pass, user.auth.password)) {
      return user
    }
    throw handleError(401, 'Username or Password incorrect')
}

const User = mongoose.model("User", userSchema)

module.exports = User
