let settingCityModel=require('../models/SettingCity')

// exports.createCity=async(req,res)=>{
//     let {cityName,stateName,status,userId}=req.body;
//     try {
//         let AddCountry=await settingCity.create({
//             cityName:cityName,
//             stateName:stateName,
//             status:status,
//             userId:userId
//         })
//         return res.status(200).json({success:true,message:"Created Country Successfully"})
//     } catch (error) {
//         return res.status(400).json({success:trfalseue,error:error.message})
        
//     }
// }


exports.createCity = async(req, res)=>{
    const SettingCity = new settingCityModel({
        cityName: req.body.cityName,
        stateName: req.body.stateName,
        status:req.body.status,
    })
    SettingCity.save()
    .then(()=>{
        res.send("City Saved")
    })
    .catch(err=>console.log(err))
}
// ------------------------------------DeleteCountry------------------------

exports.deleteCity=async(req,res)=>{
    let _id=req.params._id;
    try {
        let deleteCityById=await settingCityModel.findByIdAndDelete({_id:_id})
     if(deleteCityById)

    {
        return res.status(200).json({success:true,message:"Employees deleted successfully",deleteCityById})

    }else{

        return res.status(500).json({success:false,message:"User not found"})
    }

    } catch (error) {
        return res.status(200).json({success:true,error:error.message})
        
    }
}



exports.GetAllCity=async(req,res)=>{
 const data = await settingCityModel.find({})
 res.json(data)
}




// --------------------Filter--------------------


exports.filterCity = async (req, res) => {
    let { cityName, stateName, status } = req.query;  // Extract filter parameters from the query string

    // Build the filter object dynamically
    let filter = {};

    if (cityName) {
        filter.cityName = { $regex: cityName, $options: 'i' }; // Case-insensitive match for city name
    }

    if (stateName) {
        filter.stateName = { $regex: stateName, $options: 'i' }; // Case-insensitive match for state name
    }

    if (status) {
        filter.status = status; // Exact match for status
    }

    try {
        let filteredCities = await settingCity.find(filter);  // Find cities based on the filter
        return res.status(200).json({ success: true, message: "Filtered cities retrieved successfully", data: filteredCities });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};



////////   UpdateCity



exports.updateCity = async (req, res) => {
    const id = req.params.id
    const newData = req.body

    await settingCityModel.findByIdAndUpdate(id, newData, { new: true })
    res.send("city updated")
}



/////  ViewCity




exports.viewCity =  async (req, res) => {
    const id = req.params.id
    const data = await settingCityModel.find({ _id: id })
    res.json(data)
}