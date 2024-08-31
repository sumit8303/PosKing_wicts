let AddressAdministrator = require('../models/AdminstratorAddress.js')


exports.AdministratorAddressDetails = async(req, res)=>{
    const AdministratorAddressDetails = new AddressAdministrator({
        name: req.body.name,
        email: req.body.email,
        city: req.body.city,
        phoneNumber: req.body.phoneNumber,
        zipCode: req.body.zipCode,
        streetAddress: req.body.streetAddress,
        state: req.body.state,
        country: req.body.country,
    })
    AdministratorAddressDetails.save()
    .then((data)=>{
        res.send('save category')
    })
    .catch(err=>console.log(err))
        
    }



// --------------------FindAllAddress------------------


// exports.AdminstratorAllAddress=async(req,res)=>{
//     try {
//         let findall=await AddressAdministrator.find()
//         return res.status(200).json({success:true,message:"get all address",findall})
//     } catch (error) {
//         return res.status(400).json({success:false,error:error.message})
        
//     }
// }


exports.AdminstratorAllAddress  = async (req, res) => {
    let data = await AddressAdministrator.find({})
    res.json(data)
}





exports.deleteAdministratorAddress=async(req,res)=>{
    let _id=req.params._id;
    try {
        let findEmployees=await AddressAdministrator.findByIdAndDelete({_id:_id})
        if(findEmployees){
            return res.status(200).json({success:true,message:"Employees deleted successfully",findEmployees})
        }
    } catch (error) {
        return res.status(400).json({success:"false",error:error.message})
    }
}
