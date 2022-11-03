const mongoose = require("mongoose")
const handleError = require("../../helpers/errorHandler")

const profileSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: [true, 'user ID required']
  },
  name: {
    firstName: String,
    middleNames: [String],
    lastName: String,
  },
  contacts: {
    emails: [String],
    phones: [String],
    websites: [String]
  },
  friends: [String]
})

// profileSchema.statics.findByUsername = async (username) => {
//   const user = await Profile.findOne({ 'auth.username': username })
//   if (user) {
//     return user
//   }
//   throw handleError(404, 'User doesn\'t exist')
// }

const Profile = mongoose.model("Profile", profileSchema)

module.exports = Profile
