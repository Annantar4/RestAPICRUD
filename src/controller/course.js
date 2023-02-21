
const UsersModel = require('../models/course')

const getAllCourse = async (req,res)=>{
    try {
        const [data] = await UsersModel.getAllCourse()
        res.json({
        message: 'GET all Course success',
        data
        
    })
    } catch (error) {
        res.status(500).json({
            message : "server error",
            serverMessage : error,
        })
    }
}

const createAllCourse = async (req,res)=>{
    const{body}=req
    try {
        await UsersModel.createNewCourse(body)
        res.json({
            message: 'CREATE new Course success',
            data : req.body
        })
    } catch (error) {
        res.status(500).json({
            message : "server error",
            serverMessage : error,
        })
    }
   
} 

const updateCourse = async (req,res)=>{
    const{id} = req.params
    const{body} = req
    try {
        await UsersModel.updateCourse(body, id)
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

const deleteCourse = async (req,res)=>{
    const{id} = req.params 
    try {
        await UsersModel.deleteCourse(id)
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
    getAllCourse,
    createAllCourse,
    updateCourse,
    deleteCourse,
}