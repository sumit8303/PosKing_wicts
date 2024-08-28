const administratorCategoryModel = require('../models/administratorCategory.js')

exports.saveAdministratorCategory = async(req, res)=>{
    const AdministratorCategory = new administratorCategoryModel({
        country: req.body.country,
    })
    AdministratorCategory.save()
    .then((data)=>{
        res.send('save category')
    })
    .catch(err=>console.log(err))
        
    }



// --------------------FindAllAddress------------------
exports.getAdministratorCategory = async (req, res) => {
    let data = await administratorCategoryModel.find({})
    res.json(data)
}