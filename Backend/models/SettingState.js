let mongoose = require('mongoose')


let stateSchema=new mongoose.Schema({
    stateName:String,
    countryName:String,
    status:String,
  
})
module.exports=mongoose.model("SettingState",stateSchema)