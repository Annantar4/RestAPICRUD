const logRequest = (req,res,next)=>{
    console.log('log terjadi request path : ', req.path)
    next()
} 


module.exports = logRequest