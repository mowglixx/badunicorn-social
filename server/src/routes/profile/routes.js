const authRouter = require('express').Router()

// controllers
const { getUser } = require('./controllers')
const { tokenCheck, hashPass } = require('../../middleware/middleware')
const handleError = require('../../helpers/errorHandler')

authRouter.param('userId', async (req, res, next, userId) => {
    try {
        const foundProfile = await Profile.find({ userId: userID })
        if (foundUser) {
            req.profile = foundProfile
        }
        else {
            throw handleError(400, 'bad request')
        }
        next()
    } catch (e) {
        next(e)
    }
})
authRouter.route('/:userId')
    .get(getProfile)
authRouter.post('/register', hashPass, addUser)
authRouter.get('/search', listUsers)

module.exports = authRouter
