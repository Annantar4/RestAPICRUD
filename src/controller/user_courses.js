const UsersModel = require('../models/user_courses')


const getCourses = async (req,res)=>{
    const{body}=req
    try {
        const [data] = await UsersModel.getUserCourses()
        res.json({
        message: 'GET all user courses success',
        data
        
    })
    } catch (error) {
        res.status(500).json({
            message : "server error",
            serverMessage : error,
        })
    }
   
}


const createCourses = async (req,res)=>{
    const{body}=req
    try {
        await UsersModel.createUserCourses(body)
        res.json({
            message: 'CREATE new user courses success',
            data : req.body
        })
    } catch (error) {
        res.status(500).json({
            message : "server error",
            serverMessage : error,
        })
    }
   
} 

const updateCourses = async (req,res)=>{
    const{id} = req.params
    const{body} = req
    try {
        await UsersModel.updateUserCourses(body, id)
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

const deleteCourses = async (req,res)=>{
    const{id} = req.params 
    try {
        await UsersModel.deleteUserCourses(id)
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
    createCourses,
    getCourses,
    updateCourses,
    deleteCourses
}