const dbpool = require('../config/database')
const { param } = require('../routes/users')

const getAllUsers = ()=>{
    const SQLquery = 'SELECT * FROM users'

    
    return dbpool.execute(SQLquery) 
}  

const createNewUser = (body)=>{
    const SQLquery = `  INSERT INTO users (name, email, password) 
                        VALUES ('${body.name}', '${body.email}', '${body.password}')`
    return dbpool.execute(SQLquery) 

}

const updateUser = (body,id)=>{
    const SQLquery = `  UPDATE users SET 
                        name='${body.name}', email='${body.email}', password='${body.password}' 
                        WHERE id=${id}`
    return dbpool.execute(SQLquery) 
}

const deleteUser = (id)=>{
    const SQLquery = `DELETE FROM users WHERE id=${id}`
    return dbpool.execute(SQLquery)
}

module.exports = {
    getAllUsers,
    createNewUser,
    updateUser,
    deleteUser,
}

