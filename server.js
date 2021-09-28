const express = require("express")
const cors = require("cors")
const app = express()

app.use(express.json())
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.listen(8080, function(){
    console.log("Server is running...")
})

app.post("/cadastrar", function(req, res){
    
    const {name, teste} = req.body
    console.log(req.body)
    res.send({message:`Olá ${name} ${teste}`})
})
