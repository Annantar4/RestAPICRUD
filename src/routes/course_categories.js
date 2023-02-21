const express = require('express')
const router = express.Router()
const userController = require('../controller/course_categories')


// create-pake post
router.post('/', userController.createAllCourseCategory)

// read-pake get
router.get('/', userController.getAllCourseCategory) 

// update- bisa pake put bisa pake patch 
router.patch('/:id',userController.updateCourseCategory)

// delete -pake delete
router.delete('/:id',userController.deleteCourseCategory)


module.exports = router
