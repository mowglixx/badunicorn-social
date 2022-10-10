const mongoose = require("mongoose")
const jwt = require("jsonwebtoken")
const bcrypt = require("bcryptjs")
const User = require('../auth/models')

const profileSchema = new mongoose.Schema(
  {
    user: User,
    name: {
      firstName: {
        type: String
      },
      middleNames: [String],
      lastName: String,
    },
    contacts: {
      emails: [String],
      phones: [String],
      websites: [String]
    },
    friends: [String]

  }
  //   {
  //   id: {
  //     type: String,
  //     required: true,
  //   },
  //   user: {
  //     type: userSchema,
  //     required: true,
  //     unique: true,
  //   },
  //   email: {
  //     type: String,
  //     required: true,
  //     unique: true,
  //     match: /.+\@.+\..+/,
  //   },
  //   password: {
  //     type: String,
  //     required: true,
  //   },
  // }
)

const User = mongoose.model("User", userSchema)

module.exports = User
