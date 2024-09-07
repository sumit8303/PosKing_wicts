let settingCountry = require('../models/SettingCountry.js')

// exports.createCountry=async(req,res)=>{
//     let {countryName,code,status,userId}=req.body;
//     try {
//         let AddCountry=await settingCountry.create({
//             countryName:countryName,
//             code:code,
//             status:status,
//             userId:userId
//         })
//         return res.status(200).json({success:true,message:"Created Country Successfully"})
//     } catch (error) {
//         return res.status(400).json({success:trfalseue,error:error.message})
        
//     }
// }



exports.createCountry = async(req, res)=>{
    const SettingCountry = new settingCountry({
        countryName: req.body.countryName,
        code: req.body.code,
        status: req.body.status,
    
    })
    SettingCountry.save()
    .then((data)=>{
        res.send('save country')
    })
    .catch(err=>console.log(err))
        
}

// ------------------------------------DeleteCountry------------------------

exports.deleteCountry=async(req,res)=>{
    let _id=req.params._id;
    try {
        let deleteCountryById=await settingCountry.findByIdAndDelete({_id:_id})
     if(deleteCountryById)

    {
        return res.status(200).json({success:true,message:"Employees deleted successfully",deleteCountryById})

    }else{

        return res.status(500).json({success:false,message:"User not found"})
    }

    } catch (error) {
        return res.status(200).json({success:true,error:error.message})
        
    }
}




// exports.GetAllCountry=async(req,res)=>{
    
//     try {
//         let findall=await settingCountry.find()z
//         return res.status(200).json({success:true,message:"get all address",findall})
//     } catch (error) {
//         return res.status(400).json({success:false,error:error.message})
        
//     }
// }


exports.GetAllCountry = async(req, res)=>{
    let data =  await settingCountry.find({})
    res.json(data)
}



exports.updateCountry = async (req, res) => {
    let id = req.params.id
    let newData = req.body

    await settingCountry.findByIdAndUpdate(id, newData, { new: true })
    res.send("country updated")
}




exports.viewCountry =  async (req, res) => {
    let id = req.params.id
    let data = await settingCountry.find({ _id: id })
    res.json(data)
}