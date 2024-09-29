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


// exports.AdministratorAddressDetails = async (req, res) => {
//     let { name, email, phoneNumber, city, country, state, zipCode, street } = req.body;
//     try {
//         let _id = req.params._id;

//         let findemploy = await AddressAdministrator.findOne({ _id: _id })
//         if (findemploy) {

//         }
//         let addaddress = await AddressAdministrator.create({
//             name: name,
//             email: email,
//             city: city,
//             phoneNumber: phoneNumber,
//             zipCode: zipCode,
//             street: street,
//             state: state,
//             country: country
//         })



//         return res.status(200).json({ success: true, message: "add address successfully", addaddress })
//     } catch (error) {
//         return res.status(200).json({ success: false, error: error.message })

//     }
// }



// --------------------FindAllAddress------------------


// exports.AdminstratorAllAddress=async(req,res)=>{
//     try {
//         let findall=await AddressAdministrator.find()
//         return res.status(200).json({success:true,message:"get all address",findall})
//     } catch (error) {
//         return res.status(400).json({success:false,error:error.message})

//     }
// }


exports.AdminstratorAllAddress = async (req, res) => {
    let data = await AddressAdministrator.find({})
    res.json(data)
}





exports.deleteAdministratorAddress = async (req, res) => {
    let _id = req.params._id;
    try {
        let findEmployees = await AddressAdministrator.findByIdAndDelete({ _id: _id })
        if (findEmployees) {
            return res.status(200).json({ success: true, message: "Employees deleted successfully", findEmployees })
        }
    } catch (error) {
        return res.status(400).json({ success: "false", error: error.message })
    }
}



// ------------------------------------------------Administrators-View-------------------------------

exports.viewAdministratorAddress = async (req, res) => {
    let id = req.params.id
    let data = await AddressAdministrator.find({ _id: id })
    res.json(data)
}




// ------------------Update-Administrator--------------------------


// exports.updateAdministratorAddress=async(req,res)=>{
//     let _id=req.params._id;

// let {name,city,street,country,phoneNumber,zipCode,state}=req.body;
//     try {
//         let findCustomer=await AddressAdministrator.findByIdAndUpdate({_id:_id})
//         if(findCustomer){
// let updateCustomer= await AddressAdministrator.updateOne({_id:_id}, { $set:{name: name,zipCode:zipCode,city:city,street:street,country:country,phoneNumber:phoneNumber,state:state}})

//             return res.send.json({success:true,message:"Employees updated successfully",updateCustomer})
//         }
//     } catch (error) {
//         return res.status(400).json({success:"false",error:error.message})
//     }
// }





exports.updateAdministratorAddress = async (req, res) => {
    let _id = req.params._id;
    let { name, email, phoneNumber, city, country, state, zipCode, streetAddress } = req.body;


    try {
        let findCustomer = await AddressAdministrator.findById(_id);
        if (findCustomer) {
            findCustomer.name = name;
            findCustomer.email = email;
            findCustomer.phoneNumber = phoneNumber;
            findCustomer.city = city;
            findCustomer.country = country;
            findCustomer.state = state;
            findCustomer.zipCode = zipCode;
            findCustomer.streetAddress = streetAddress;


            await findCustomer.save();

            return res.json({ success: true, message: "Administrator updated successfully", findCustomer });
        } else {
            return res.status(404).json({ success: false, message: "Administrator not found" });
        }
    } catch (error) {
        return res.status(400).json({ success: false, error: error.message });
    }
};