const mongoose = require('mongoose')

let AdministratorAddressSchema=new mongoose.Schema({
    name:String,

    email:String,

    city:String,

    state:String,

    country:String,

    zipCode:String,


    phoneNumber:Number,

    streetAddress:String,
   

  
})
module.exports=mongoose.model("AdministratorAddressDetails",AdministratorAddressSchema)