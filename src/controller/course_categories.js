
const UsersModel = require('../models/course_categories')

const getAllCourseCategory = async (req,res)=>{
    try {
        const [data] = await UsersModel.getAllCourseCategory()
        res.json({
        message: 'GET all Course Category success',
        data
        
    })
    } catch (error) {
        res.status(500).json({
            message : "server error",
            serverMessage : error,
        })
    }
}

const createAllCourseCategory = async (req,res)=>{
    const{body}=req
    try {
        await UsersModel.createNewCourseCategory(body)
        res.json({
            message: 'CREATE new Course Category success',
            data : req.body
        })
    } catch (error) {
        res.status(500).json({
            message : "server error",
            serverMessage : error,
        })
    }
   
} 

const updateCourseCategory = async (req,res)=>{
    const{id} = req.params
    const{body} = req
    try {
        await UsersModel.updateCourseCategory(body, id)
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

const deleteCourseCategory = async (req,res)=>{
    const{id} = req.params 
    try {
        await UsersModel.deleteCourseCategory(id)
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
    getAllCourseCategory,
    createAllCourseCategory,
    updateCourseCategory,
    deleteCourseCategory,
}