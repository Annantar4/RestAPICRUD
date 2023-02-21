
const adminModel = require('../models/admin')

const createAllAdmin = async (req,res)=>{
    const{body}=req
    try {
        await adminModel.createNewAdmin(body)
        res.json({
            message: 'CREATE new admin success',
            data : req.body
        })
    } catch (error) {
        res.status(500).json({
            message : "server error",
            serverMessage : error,
        })
    }
   
} 

const loginAllAdmin = async (req,res)=>{
    const{body}=req
    const data = adminModel.loginAdmin(body)
    data.then(x=>{
        const y = x[0]
        // console.log(y)
        if (y.length ==0) {
            res.json({
                massage: 'Incorrect email or password'
            })
        } else {
            res.json({
                massage: 'login success'
            })
        }
    })
    
   
}

module.exports = {
    createAllAdmin, 
    loginAllAdmin
} 


