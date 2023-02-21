require('dotenv').config()
const PORT = process.env.PORT || 3000
const express = require('express')
const app = express()
const usersRoutes = require('./routes/users')
const adminRoutes = require('./routes/auth')
const user_coursesRoutes = require('./routes/user_courses')
const course = require('./routes/course')
const course_category = require('./routes/course_categories')
const logs = require('./middleware/logs')
const port = 3000

app.use(logs)
app.use(express.json())
app.use('/admin',adminRoutes)
app.use('/users',usersRoutes) 
app.use('/user_courses',user_coursesRoutes)
app.use('/courses',course)
app.use('/course_categories',course_category)


app.listen(port,()=>{
    console.log(`server run on port ${PORT}`)
}) 
