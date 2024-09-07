const mongoose = require('mongoose')

let customerAddressSchema = new mongoose.Schema({
    name: String,
    email: String,
    phoneNumber: String,
    country:String,
    city:String,

    state:String,


    zipCode:String,

    streetAddress:String,
   

  
})
module.exports=mongoose.model("CustomerAddressDetails",customerAddressSchema)