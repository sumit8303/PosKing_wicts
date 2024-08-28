let addressemployee = require('../models/addAddress.js')


exports.createdaddressDetails = async(req, res)=>{
    const EmployeesAddressDetails = new addressemployee({
        name: req.body.name,
        email: req.body.email,
        city: req.body.city,
        phoneNumber: req.body.phoneNumber,
        zipCode: req.body.zipCode,
        streetAddress: req.body.streetAddress,
        state: req.body.state,
        country: req.body.country,
    })
    EmployeesAddressDetails.save()
    .then((data)=>{
        res.send('save category')
    })
    .catch(err=>console.log(err))
        
    }





exports.employAllAddress  = async (req, res) => {
    let data = await addressemployee.find({})
    res.json(data)
}



exports.deleteAddress=async(req,res)=>{
    let _id=req.params._id;
try {
    let deleteAddress=await addressemployee.findByIdAndDelete({_id:_id})
    if(deleteAddress){
        return res.status(200).json({success:true,message:"Address deleted successfully"})
    }
} catch (error) {
    return res.status(400).json({success:false,error:error.message})
    
}
}


exports.viewAdministratorAddress =  async (req, res) => {
    let id = req.params.id
    let data = await addressemployee.find({ _id: id })
    res.json(data)
}