// let express=require("express")
let bcryptjs = require('bcryptjs')

let customerModel=require('../models/AddCustomer')

// ---------------------Add-Employee------------------


exports.newCustomer = async (req, res) => {
    let {name,password,confirmPassword,email,status,phoneNumber,image}=req.body;


    try {
        let exployeesfind = await customerModel.findOne({ email: email })

        if (!exployeesfind) {
                     // Check if password and confirmPassword match
                     if (password !== confirmPassword) {
                        return res.status(400).json({ success: false, msg: "Passwords do not match" });
                    }
            const salt = bcryptjs.genSaltSync(10);
            const hashPassword = bcryptjs.hashSync(password, salt);
            // console.log(hashPassword)

            let details = await customerModel.create({
                name: name,
                email: email,
                password: hashPassword,
                confirmPassword:hashPassword,
                phoneNumber:phoneNumber,
                status:status,
                image:req.file.filename

            })
            return res.status(200).json({ success: true, msg: "user created successfully", details })

        }
        else {
            return res.status(200).json({ success: false, msg: "user already exists!" })
        }
    } catch (error) {
        return res.status(500).json({ success: false, msg: "error in creating user", error: error.message })
    }


}


// --------------------Get-All-Employees----------------------


exports.getAllCustomer  = async (req, res) => {
    let data = await customerModel.find({})
    res.json(data)
}

// exports.getAllCustomer=async(req,res)=>{
//     // let _id=req.params._id;
//     try {
//     let getallCustomer=await  customerModel.find()
//         return res.status(200).json({success:true,message:"get all exployees",getallCustomer})
//     } catch (error) {
//         return res.status(200).json({success:false,error:error.message})
        
//     }
    // }

// ------------------Delete-Customer--------------------------

exports.deleteCustomer=async(req,res)=>{
    let _id=req.params._id;
    try {
        let findEmployees=await customerModel.findByIdAndDelete({_id:_id})
        if(findEmployees){
            return res.status(200).json({success:true,message:"Employees deleted successfully",findEmployees})
        }
    } catch (error) {
        return res.status(400).json({success:"false",error:error.message})
    }
}


// ------------------Update-Customer--------------------------


// exports.updateCustomer = async (req, res) => {
//     let _id = req.params._id;
//     let {name,email,password,confirmPassword,phoneNumber,address,status,image}=req.body;


//     try {
//         let findCustomer = await customerModel.findById(_id);
//         if (findCustomer) {
//             findCustomer.name = name;
//             findCustomer.email = email;
//             findCustomer.phoneNumber = phoneNumber;
//             findCustomer.confirmPassword = confirmPassword;
//             findCustomer.password = password;
//             findCustomer.address = address;
//             findCustomer.status = status;
//             findCustomer.image = req.file.filename;

//             await findCustomer.save();

//             return res.json({ success: true, message: "customer updated successfully", findCustomer });
//         } else {
//             return res.status(404).json({ success: false, message: "customer not found" });
//         }
//     } catch (error) {
//         return res.status(400).json({ success: false, error: error.message });
//     }
// };



exports.updateCustomer = async (req, res) => {
    let _id = req.params._id;
    let { name, email, password, confirmPassword, phoneNumber, status } = req.body;
    try {
        // Find the administrator by ID
        let findCustomer = await customerModel.findById(_id);
        if (findCustomer) {
            // Prepare the update object
            let updateData = { 
                email, 
                password, 
                confirmPassword, 
                phoneNumber, 
                name, 
                status 
            };

            // Check if there is an image in the request
            if (req.file) {
                updateData.image = req.file.filename;
            }

            // Update the administrator's details
            let updateCustomer = await customerModel.updateOne({ _id }, { $set: updateData });

            return res.json({ success: true, message: "Employee updated successfully", updateCustomer });
        } else {
            return res.status(404).json({ success: false, message: "Administrator not found" });
        }
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};



// ------------------------------Customer-Filter-------------------------------------------
exports.CustomerFilter=async(req,res)=>{
    let {name,email,phoneNumber}=req.body;
    let query={};
    if(name){
        query.name = { $regex: name, $options: 'i' }; // 'i' for case-insensitive search

    }
    if(email){
        query.email={$regex:email,$option:"i"};
    }
    if(phoneNumber){
        query.phoneNumber={$regex:phoneNumber,$option:"i"};
    }

    if(image){
        query.phoneNumber={$regex:image,$option:"i"};
    }
    try {
        let findquery=await customerModel.find(query);
        res.send(findquery)
    } catch (error) {
        res.status(500).send(err.message);
        
    }
}

// --------------------------------Customer-View---------------------------

exports.viewCustomer =  async (req, res) => {
    let id = req.params.id
    let data = await customerModel.find({ _id: id })
    res.json(data)
}