const {Router} = require('express')
const usersRouter = Router()
const {createUser, getUsers, getUser} = require('../../controllers/overmin/users.controller')

// api/overmin/users/create
usersRouter.post('/create', createUser)
// api/overmin/users/get
usersRouter.get('/get', getUsers)
// api/overmin/users/get/:login
usersRouter.get('/get/:login', getUser)

module.exports = usersRouter