

// const { default: mongoose } = require('mongoose')
const mongoose=require('mongoose')

mongoose.connect('mongodb://0.0.0.0:27017/voting-system')
.then(()=>console.log("db connection is succsse"))
.catch(err=>console.log("err",err))

const voterschema=new mongoose.Schema({
    voterId:{
        type:String,
        unique:true,
        required:true

    },
    name:{
        type:String
    },
    fatherName:{
        type:String
    },
    motherName:{
        type:String
    },
    age:{
        type:Number
    },
})


const Voter=mongoose.model('voter',voterschema)

module.exports=Voter