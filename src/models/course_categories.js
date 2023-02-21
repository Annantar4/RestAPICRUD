const dbpool = require('../config/database')
const { param } = require('../routes/course_categories')

const getAllCourseCategory = ()=>{
    const SQLquery = 'SELECT * FROM course_categories'

    
    return dbpool.execute(SQLquery) 
}  

const createNewCourseCategory = (body)=>{
    const SQLquery = `  INSERT INTO course_categories (name) 
                        VALUES ('${body.name}')`
    return dbpool.execute(SQLquery) 

}

const updateCourseCategory = (body,id)=>{
    const SQLquery = `  UPDATE course_categories SET 
                        name='${body.name}'
                        WHERE id=${id}`
    return dbpool.execute(SQLquery) 
}

const deleteCourseCategory = (id)=>{
    const SQLquery = `DELETE FROM course_categories WHERE id=${id}`
    return dbpool.execute(SQLquery)
}

module.exports = {
    getAllCourseCategory,
    createNewCourseCategory,
    updateCourseCategory,
    deleteCourseCategory,
}

