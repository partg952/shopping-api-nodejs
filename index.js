const express = require('express')
const mongoose = require('mongoose')  
const Shopping = require('./schema')
const cors = require('cors')
const app = express();
app.use(cors())
const URL = 'mongodb+srv://asura:chakra@cluster0.k3j2t.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(URL,{useNewUrlParser:true})
.then(()=>app.listen(8080,()=>console.log('listening at 8080')))
.catch(()=>console.log('we faced some issue please try again'))

app.get('/save-data',(req,res)=>{
    const shopping = new Shopping({
        name:req.query['name'],
        price:req.query['price'],
        rating:req.query['rating'],
        image:req.query['image'],
    })

    shopping.save().then((result)=>{
        res.send(result)
    }).catch((err)=>{
        console.log(err)
    })
})

app.get('/',(req,res)=>{
    Shopping.find().then((result)=>{
        res.send(result)
    })
})