
const Voter=require('../db')
const generateUniqueId=require('../middleware/generatorVoterId')
const getAllVoter=async(req,res)=>{
    voterlist =await Voter.find()
    res.send({message:"get all voter list",payload:voterlist})
}

const createVoterList=async (req,res)=>{
    voterList=req.body
    voterList.voterId=generateUniqueId()
    
    voterList=await Voter.create(voterList)
    console.log(voterList)

    res.send({message:"voter is crearted",payload:voterList})
}


module.exports={getAllVoter,createVoterList}