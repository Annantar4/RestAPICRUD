const express = require('express')
const router = express.Router()
const userController = require('../controller/course')


// create-pake post
router.post('/', userController.createAllCourse)

// read-pake get
router.get('/', userController.getAllCourse) 

// update- bisa pake put bisa pake patch 
router.patch('/:id',userController.updateCourse)

// delete -pake delete
router.delete('/:id',userController.deleteCourse)


module.exports = router
