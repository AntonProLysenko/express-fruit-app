const mongoose = require("mongoose")//technology that helps us to comunicate with MONGODB
//Creating Schema
const fruitSchema = new mongoose.Schema({
    name:{type:String,required:true},
    color:{type:String, required:true},
    new:{type:String},
    readyToEat:Boolean
},
    {
        timestamps:true //will add data to the database of when the element was created 
    }   
)
//Creating a modele
const Fruit = mongoose.model('Fruit',fruitSchema)//1st arg is the name of our model-file, 2nd is our Schema
module.exports= Fruit