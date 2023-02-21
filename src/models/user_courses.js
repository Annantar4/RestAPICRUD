const dbpool = require('../config/database')
const { param } = require('../routes/user_courses')


const getUserCourses = ()=>{
    const SQLquery = 'SELECT * FROM user_courses'

    
    return dbpool.execute(SQLquery) 
} 


const createUserCourses = (body)=>{
    const SQLquery = `  INSERT INTO user_courses (users_id, course_id) 
                        VALUES (${body.users_id}, ${body.course_id})`

    return dbpool.execute(SQLquery) 

} 

const updateUserCourses = (body,id)=>{
    const SQLquery = `  UPDATE user_courses SET 
                        users_id=${body.users_id}, course_id=${body.course_id}
                        WHERE id=${id}`
    return dbpool.execute(SQLquery) 
}

const deleteUserCourses = (id)=>{
    const SQLquery = `DELETE FROM user_courses WHERE id=${id}`
    return dbpool.execute(SQLquery)
}

module.exports = {
    createUserCourses,
    getUserCourses,
    updateUserCourses,
    deleteUserCourses
} 

