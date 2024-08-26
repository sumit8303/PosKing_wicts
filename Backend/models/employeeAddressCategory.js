const mongoose = require("mongoose")


const addressCategorySchema = new mongoose.Schema({
     country: String

})
module.exports = mongoose.model("addressCategory", addressCategorySchema)