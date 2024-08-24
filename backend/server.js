
// create express app
const exp=require('express')
const app=exp()

// for send body during post
app.use(exp.json( ))


const voterApp=require('./api/voterApi')
app.use('/voter',voterApp)



// middleware 
app.use((err,req,res,next)=>{
    res.send({message:"errror occur in error handler",playload:err})
})

app.listen(4003,()=>console.log("server is running on 4003 port"))
