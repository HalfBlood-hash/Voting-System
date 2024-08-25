

// make mini express app
const exp=require('express')
const voterApp=exp.Router()


const  expressErrorHandler=require('express-async-handler')
const {getAllVoter,createVoterList}=require('../controllers/voterController')

voterApp.get('/getvoter',expressErrorHandler(getAllVoter))
voterApp.post('/createvoter',expressErrorHandler(createVoterList))


module.exports=voterApp