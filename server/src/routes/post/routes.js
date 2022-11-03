const authRouter = require('express').Router()

// controllers
const {
    addUser,
    login,
    updateUser,
    deleteUser,
    listUsers,
    middleError } = require('./controllers')
const { tokenCheck, hashPass } = require('../../middleware/middleware')

// authRouter.param('userId' (req, res, next, userId) => {

    // })
authRouter.route('/')
    .post(login)
    .put( tokenCheck, updateUser)
    .delete( tokenCheck, deleteUser)
authRouter.post('/register', hashPass, addUser)
authRouter.get('/search',listUsers)

module.exports = authRouter
