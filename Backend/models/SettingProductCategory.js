let mongoose=require('mongoose')


let settingProductCategorySchema = new mongoose.Schema({
    name:{
        type:String,
    },
    parentCategory:{
        type:String,
    },
    status:String,
    description:{
        type:String,
      },
      image: String

})

module.exports=mongoose.model("SettingParentCategory", settingProductCategorySchema)