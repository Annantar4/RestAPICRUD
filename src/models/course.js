const dbpool = require('../config/database')
const { param } = require('../routes/course')

const getAllCourse = ()=>{
    const SQLquery = 'SELECT * FROM course'

    
    return dbpool.execute(SQLquery) 
}  

const createNewCourse = (body)=>{
    const SQLquery = `  INSERT INTO course (title, course_category_id) 
                        VALUES ('${body.title}', ${body.course_category_id})`
    return dbpool.execute(SQLquery) 

}

const updateCourse = (body,id)=>{
    const SQLquery = `  UPDATE course SET 
                        title='${body.title}', course_category_id=${body.course_category_id}
                        WHERE id=${id}`
    return dbpool.execute(SQLquery) 
}

const deleteCourse = (id)=>{
    const SQLquery = `DELETE FROM course WHERE id=${id}`
    return dbpool.execute(SQLquery)
}

module.exports = {
    getAllCourse,
    createNewCourse,
    updateCourse,
    deleteCourse,
}

