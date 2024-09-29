let attributes=require("../models/SettingProductAttributesColor")

exports.CreateattributesColor=async(req,res)=>{
    let {color}=req.body;

    try {
        let ColorAdd=await attributes.create({
            color:color,
           


        })
        return res.status(200).json({success:true,message:"category created successfully",ColorAdd})
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
}



// -----------------------------------------------------------------Delete_Supplier-----------------------------------

exports.deleteattributesColor = async (req, res) => {
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


// exports.getAllattributesColor=async(req,res)=>{
//     try {
//         let findgetdata=await  attributes.find({})
//         return res.status(200).json({success:true,message:"get all data",findgetdata})
//     } catch (error) {
//         return res.status(500).json({success:false,error:error.message})
        
//     }
// }

exports.getAllattributesColor = async (req, res)=>{
    const data = await attributes.find({})
    res.json(data)
}


// -----------------------------------------------------------------UpdateSupplier-----------------------------------




// let updateattributes=async(req,res)=>{
//     let _id=req.params._id;
//     let {name}=req.body;
//     try {
//         let findEmployees=await settingProductCategory.findByIdAndUpdate({_id:_id})
//         if(findEmployees){
//     let updateEmployee = await settingProductCategory.updateOne({_id:_id}, { $set:{name:name} })

//             return res.status(200).json({success:true,message:"Employees updated successfully",findEmployees})
//         }
//     } catch (error) {
//         return res.status(400).json({success:"false",error:error.message})
//     }
// }


exports.updateattributesColor = async (req, res) => {
    let _id = req.params._id;
    let { color } = req.body;

    try {
        // Use findByIdAndUpdate directly to find and update in one step
        let updatedColor = await attributes.findByIdAndUpdate(
            _id,
            { $set: { color } },
            { new: true, runValidators: true } // Return the updated document and run validators
        );

        // Check if the employee was found and updated
        if (updatedColor) {
            return res.status(200).json({
                success: true,
                message: "Employee updated successfully",
                data: updatedColor
            });
        } else {
            return res.status(404).json({ success: false, message: "Employee not found" });
        }
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};




// ----------------------------Setting Product Attributes View---------------------------

exports.viewSettingProductAttributsColor =  async (req, res) => {
    let id = req.params.id
    let data = await attributes.find({ _id: id })
    res.json(data)
}