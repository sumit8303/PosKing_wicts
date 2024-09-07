let mongoose=require('mongoose')

let country = new mongoose.Schema({
    countryName:{
        type:String,
    },
    code:{
        type:String,
    },
    status:{
       type: String
    },
   
})
module.exports=mongoose.model("SettingCountry",country)