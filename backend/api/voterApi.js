

// make mini express app
const exp=require('express')
const voterApp=exp.Router()


const  expressErrorHandler=require('express-async-handler')
const getAllVoter=require('../controllers/voterController')

voterApp.get('/getvoter',expressErrorHandler(getAllVoter))



module.exports=voterApp