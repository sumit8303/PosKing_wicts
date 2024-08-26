let addressemployee = require('../models/addAddress.js')


// --------------------AddAddress-----------------
exports.createdaddressDetails=async(req,res)=>{
    let {name,email,phoneNumber,city,country,state,zipCode,streetAddress}=req.body;
    try {
        let _id=req.params._id;
    
        let findemploy = await addressemployee.findOne({_id:_id})
if(findemploy){
 
}
let addaddress=await addressemployee.create({
    name:name,
    email:email,
  city:city,
  phoneNumber:phoneNumber,
  zipCode:zipCode,
  streetAddress:streetAddress,
  state:state,
  country:country  
})        
       
        // }
     
        return res.status(200).json({success:true,message:"add address successfully",addaddress})
    } catch (error) {
        return res.status(200).json({success:false,error:error.message})
        
    }
}



// --------------------FindAllAddress------------------
// exports.employAllAddress=async(req,res)=>{
    
//     try {
//         let findall=await addressemployee.find()
//         return res.status(200).json({success:true,message:"get all address",findall})
//     } catch (error) {
//         return res.status(400).json({success:false,error:error.message})
        
//     }
// }



exports.employAllAddress  = async (req, res) => {
    let data = await addressemployee.find({})
    res.json(data)
}