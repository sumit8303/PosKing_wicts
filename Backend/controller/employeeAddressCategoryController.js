const addressCatagoryModel = require('../models/employeeAddressCategory.js')

exports.saveAddressCategory = async(req, res)=>{
    const addressCategory = new addressCatagoryModel({
        country: req.body.country,
    })
    addressCategory.save()
    .then((data)=>{
        res.send('save category')
    })
    .catch(err=>console.log(err))
        
    }



// --------------------FindAllAddress------------------
exports.getAdressCategory = async (req, res) => {
    let data = await addressCatagoryModel.find({})
    res.json(data)
}