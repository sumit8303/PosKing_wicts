let attributes=require("../models/SettingProductAttributes")

exports.Createattributes=async(req,res)=>{
    let {name}=req.body;

    try {
        let category=await attributes.create({
            name:name,
        })
        return res.status(200).json({success:true,message:"category created successfully",category})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}



// -----------------------------------------------------------------Delete_Supplier-----------------------------------

exports.deleteattributes = async (req, res) => {
    try {
        let result = await attributes.findByIdAndDelete(req.params._id);
        if (!result) {
            return res.status(404).json({ success: false, message: "attributes deleted successfully" });
        }
        return res.status(200).json({ success: true, message: "attributes deleted successfully" });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};


// -----------------------------------------------------------------Get_ALL_Supplier-----------------------------------


// exports.getAllattributes=async(req,res)=>{
//     try {
//         let findgetdata=await  attributes.find({})
//         return res.status(200).json({success:true,message:"get all data",findgetdata})
//     } catch (error) {
//         return res.status(500).json({success:false,error:error.message})
        
//     }
// }

exports.getAllattributes = async (req, res)=>{
    const data = await attributes.find({})
    res.json(data)
}


// -----------------------------------------------------------------UpdateSupplier-----------------------------------


exports.updateattributes=async(req,res)=>{
    let _id=req.params._id;
    let {name}=req.body;
    try {
        let findEmployees=await attributes.findByIdAndUpdate({_id:_id})
        if(findEmployees){
    let updateEmployee = await attributes.updateOne({_id:_id}, { $set:{name:name} })

            return res.status(200).json({success:true,message:"Employees updated successfully",findEmployees})
        }
    } catch (error) {
        return res.status(400).json({success:"false",error:error.message})
    }
}

// ----------------------------Setting Product Attributes View---------------------------

exports.viewSettingProductAttributs =  async (req, res) => {
    let id = req.params.id
    let data = await attributes.find({ _id: id })
    res.json(data)
}