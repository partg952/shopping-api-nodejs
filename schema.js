const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const dbschema = new Schema({
    name:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    rating:{
        type:Number,
        required:true,
    },
    image:{
        type:String,
        required:true,
    }
},{ timestamps: true })
const Shopping = mongoose.model('Shopping',dbschema);
module.exports = Shopping;
