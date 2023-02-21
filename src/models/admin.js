const dbpool = require('../config/database')
const { param } = require('../routes/auth') 


const createNewAdmin = (body)=>{
    const SQLquery = `  INSERT INTO admin (name, email, password) 
                        VALUES ('${body.name}', '${body.email}', '${body.password}')`
    return dbpool.execute(SQLquery) 
} 

const loginAdmin = (body)=>{
    const SQLquery = `SELECT * FROM admin WHERE email='${body.email}' AND password='${body.password}' `

    return dbpool.execute(SQLquery)
}

module.exports = {
    createNewAdmin,
    loginAdmin,
}


