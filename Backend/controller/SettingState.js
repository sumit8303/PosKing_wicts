const settingStateModel = require('../models/SettingState.js');

// exports.createState=async(req,res)=>{
//     let {stateName,countryName,status}=req.body;
//     try {
//         let AddCountry=await SettingState.create({
//             stateName:stateName,
//             countryName:countryName,
//             status:status
//         })
//         return res.status(200).json({success:true,message:"Created Country Successfully"})
//     } catch (error) {
//         return res.status(400).json({success:trfalseue,error:error.message})
        
//     }
// }


exports.createState = async(req, res)=>{
    const SettingState = new settingStateModel({
        stateName: req.body.stateName,
        countryName: req.body.countryName,
        status: req.body.status,
    })
    SettingState.save()
    .then((data)=>{
        res.send("Save state")
    })
    .catch(err=>console.log(err))
}


// ------------------------------------DeleteCountry------------------------


exports.deleteState=async(req,res)=>{
    let _id=req.params._id;
    try {
        let deleteStateById=await settingStateModel.findByIdAndDelete({_id:_id})
     if(deleteStateById)

    {
        return res.status(200).json({success:true,message:"Employees deleted successfully",deleteStateById})

    }else{

        return res.status(500).json({success:false,message:"User not found"})
    }

    } catch (error) {
        return res.status(200).json({success:true,error:error.message})
        
    }
}




// exports.GetAllState=async(req,res)=>{
    
//     try {
//         let findall=await SettingState.find()
//         return res.status(200).json({success:true,message:"get all address",findall})
//     } catch (error) {
//         return res.status(400).json({success:false,error:error.message})
        
//     }
// }


exports.getAllState = async(req, res)=>{
    const data = await settingStateModel.find({})
    res.json(data)
}





/////updateState


exports.updateState = async(req, res)=>{
    const id = req.params.id
    const newData = req.body

    await settingStateModel.findByIdAndUpdate(id, newData, {new :true})
    res.send("State updated")
}



///viewstate


exports.viewState = async(req, res)=>{
    const id = req.params.id
    const data = await settingStateModel.find({_id: id})
    res.json(data)
}