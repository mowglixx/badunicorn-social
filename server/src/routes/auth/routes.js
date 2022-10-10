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
    .get(listUsers)
authRouter.post('/register', hashPass, addUser)
authRouter.put('/update', tokenCheck, updateUser)
authRouter.delete('/delete', tokenCheck, deleteUser)

module.exports = authRouter
