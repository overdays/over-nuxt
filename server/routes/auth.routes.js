const {Router} = require('express')
const router = Router()
const {login} = require('../controllers/auth.controller')

// /api/auth/admin/login
router.post('/admin/login', login)

module.exports = router