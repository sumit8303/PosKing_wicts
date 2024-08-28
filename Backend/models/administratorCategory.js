const mongoose = require('mongoose')


const administratorCategorySchema = new mongoose.Schema({
     country:String

})
module.exports = mongoose.model("AdministratorCategory",administratorCategorySchema)
