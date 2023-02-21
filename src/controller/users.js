
const UsersModel = require('../models/users')

const getAllUsers = async (req,res)=>{
    try {
        const [data] = await UsersModel.getAllUsers()
        res.json({
        message: 'GET all users success',
        data
        
    })
    } catch (error) {
        res.status(500).json({
            message : "server error",
            serverMessage : error,
        })
    }
}

const createAllUsers = async (req,res)=>{
    const{body}=req
    try {
        await UsersModel.createNewUser(body)
        res.json({
            message: 'CREATE new user success',
            data : req.body
        })
    } catch (error) {
        res.status(500).json({
            message : "server error",
            serverMessage : error,
        })
    }
   
} 

const updateUser = async (req,res)=>{
    const{id} = req.params
    const{body} = req
    try {
        await UsersModel.updateUser(body, id)
        res.json({
            message:'update success',
            data : {
                id,
                ...body
            }
        })
    } catch (error) {
        res.status(500).json({
            message : "server error",
            serverMessage : error,
        })
    }
    
}

const deleteUser = async (req,res)=>{
    const{id} = req.params 
    try {
        await UsersModel.deleteUser(id)
        res.json ({
            message : 'delete success',
            data : null
        })
    } catch (error) {
        res.status(500).json({
            message : "server error",
            serverMessage : error,
        })
    }

}

module.exports = {
    getAllUsers,
    createAllUsers,
    updateUser,
    deleteUser,
}