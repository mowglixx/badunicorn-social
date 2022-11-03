const { uuid: v4 } = require("uuid")
const handleError = require("../../helpers/errorHandler.js")
const User = require("./models")

exports.addUser = async (req, res, next) => {
  try {
    const newUser = await User.create({ auth: req.body })
    // const profile = await Profile.create({userId: newUser._id})  // create a profile for the new user
    const token = newUser.generateAuthToken()
    // res.status(200).send({ user: newUser.username, token })
      res.status(201).send({
        user: newUser.auth.username,
        token: token
      })
  } catch (e) {
    const error = handleError(400, `${e?.keyValue?.['auth.username'] || e?.keyValue?.['auth.email']} already exists`)
    next(error)
  }
}

exports.listUsers = async (req, res, next) => {
  try {
    const scope = req.query.scope
    const userReq = req.query.user
    const listUsers = userReq ? await User.find({'auth.username': { $regex: userReq, $options: "gi" }}) :await User.find({})
    const usernames = listUsers.map(user => {
      return (
        {
          id: user._id,
          username: user.auth.username
        }
      )
    })
    if (scope) {
      
    }
    res.status(200).send({
      scope: scope ? JSON.parse(scope) : false,
      users: usernames
    })
  } catch (e) {
    next(e)
  }
}


exports.login = async (req, res, next) => {
  try {
    if (req.user) {
      res.status(200).send({ user: req.user })
    } else {
      const user = await User.findByCredentials(
        req.body.username,
        req.body.password
      )
      const token = user.generateAuthToken()
      res.cookie('token', token).status(200).send({
        username: user.auth.username
      })
    }
  } catch (e) {
    next(e)
  }
}


exports.updateUser = async (req, res, next) => {
  try {
    if (req.user) {
      await User.findByIdAndUpdate(req.user._id, {
        $set: { [req.body.key]: req.body.value },
      })
      const user = await User.findById(req.user._id)
      res.status(200).send({ user: user.username })
    } else {
      throw handleError(400, 'User not logged in')
    }
  } catch (e) {
    next(e)
  }
}

exports.deleteUser = async (req, res, next) => {
  try {
    if (req.user) {
      await User.findByIdAndDelete(req.user._id)
      res.status(200).send({ message: "Successfully deleted user" })
      return
    }
    throw handleError(
      400,
      'User not able to be deleted, you might not be authorised to delete this user or the user may not exist, either way it\'s not happening...')
  } catch (e) {
    next(e)
  }
}