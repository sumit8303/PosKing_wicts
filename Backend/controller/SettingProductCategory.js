let settingProductCategory = require("../models/SettingProductCategory.js")


// exports.CreateCategory=async(req,res)=>{
//     let {parentCategory, name,image,status,description}=req.body;

//     try {
//         let category=await settingProductCategory.create({
//             parentCategory: parentCategory,
//             name:name,
//             status:status,
//             image:req.file.filename,
//             description:description
//         })
//         return res.status(200).json({success:true,message:"category created successfully",category})
//     } catch (error) {
//         return res.status(400).json({success:false,error:error.message})
        
//     }
// }

exports.CreateCategory = async(req,res)=>{
    const SettingParentCategory = new settingProductCategory({
        parentCategory: req.body.parentCategory,
        name: req.body.name,
        status: req.body.status,
        image: req.file.filename,
        description: req.body.description,
    })
    SettingParentCategory.save()
    .then(()=>{
        res.send('save')
    })
    .catch(err =>console.log(err))
}

// -----------------------------------------------------------------Delete_Supplier-----------------------------------

exports.deleteCategory = async (req, res) => {
    try {
        let result = await settingProductCategory.findByIdAndDelete(req.params._id);
        if (!result) {
            return res.status(404).json({ success: false, message: "category deleted successfully" });
        }
        return res.status(200).json({ success: true, message: "category deleted successfully" });
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};


// -----------------------------------------------------------------Get_ALL_Supplier-----------------------------------


// exports.getAllCategoy=async(req,res)=>{
//     try {
//         let findgetdata=await  settingProductCategory.find({})
//         return res.status(200).json({success:true,message:"get all data",findgetdata})
//     } catch (error) {
//         return res.status(500).json({success:false,error:error.message})
        
//     }
// }

exports.getAllCategoy=async(req,res)=>{
    const data = await settingProductCategory.find({})
    res.json(data)
}


// -----------------------------------------------------------------UpdateSupplier-----------------------------------


// exports.updateCategory= async (req, res) => {
//     let { date,refrenceno,status,image,supplier } = req.body;
//     let _id = req.params._id;
//     try {
//         let updatedamage = await settingProductCategory.findByIdAndUpdate(
//             _id,
//             { $set: { date, refrenceno, status, image,supplier,paymentstatus } },
//             { new: true }
//         );

//         return res.status(200).json({ success: true, message: "category  updated successfully", updatedamage });
//     } catch (error) {
//         return res.status(400).json({ success: false, error: error.message });
//     }
// };


exports.updateCategory= async (req, res) => {
    let id = req.params.id
    let newData = req.body
    if (req.file) {
        newData.image = req.file.filename;  
    }
    await settingProductCategory.findByIdAndUpdate(id, newData, { new: true })
    res.status(201).json({ message: "item Data Updated" });
}





//////viewSettingProduct


exports.viewProductSetting = async(req, res)=>{
    const id = req.params.id
    const data = await settingProductCategory.find({_id: id})
    res.json(data)
}