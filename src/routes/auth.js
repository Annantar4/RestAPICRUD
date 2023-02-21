const express = require('express')
const router = express.Router()
const adminController = require('../controller/admin')

//registrasi
router.post('/regis', adminController.createAllAdmin)

router.post('/login', adminController.loginAllAdmin)



module.exports = router