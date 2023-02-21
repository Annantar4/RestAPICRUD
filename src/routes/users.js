const express = require('express')
const router = express.Router()
const userController = require('../controller/users')


// create-pake post
router.post('/', userController.createAllUsers)

// read-pake get
router.get('/', userController.getAllUsers) 

// update- bisa pake put bisa pake patch 
router.patch('/:id',userController.updateUser)

// delete -pake delete
router.delete('/:id',userController.deleteUser)


module.exports = router
