const express = require('express')
const router = express.Router()
const userController = require('../controller/user_courses')


router.get('/', userController.getCourses)
router.post('/', userController.createCourses)
router.patch('/:id', userController.updateCourses)
router.delete('/:id', userController.deleteCourses)




module.exports = router