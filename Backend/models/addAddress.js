const mongoose = require('mongoose')

let exployeesAddressSchema = new mongoose.Schema({
    name:String,

    email:String,

    city:String,

    state:String,

    country:String,

    zipCode:String,


    phoneNumber:Number,

    streetAddress:String,
   

  
})
module.exports=mongoose.model("EmployeesAddressDetails",exployeesAddressSchema)