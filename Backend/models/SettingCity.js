let mongoose=require('mongoose')

let citySchema=new mongoose.Schema({
    cityName:{
        type:String,
    },
    stateName:{
        type:String,
    },

   
    status:String,
    userId:{
        type:String,
      }
})
module.exports=mongoose.model("SettingCity",citySchema)
