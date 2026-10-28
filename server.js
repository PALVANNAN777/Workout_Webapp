require('dotenv').config()

const express = require('express');

const app = express();


//Middle Ware 
app.use((req,res,next)=>{
    console.log(req.path,req.method)
    next()
})

app.get('/' , (req,res)=>{
    res.json({msg:"Home"});
})



app.listen(process.env.PORT , () => {
 console.log(`App running on PORT ${process.env.PORT}`)   
})

