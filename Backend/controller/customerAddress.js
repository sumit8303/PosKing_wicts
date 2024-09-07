let customerAddress = require('../models/addAddressCustomer.js')


exports.customerAddAddress = async(req, res)=>{
    const CustomerAddressDetails = new customerAddress({
        name: req.body.name,
        email: req.body.email,
        phoneNumber: req.body.phoneNumber,
        city: req.body.city,
        zipCode: req.body.zipCode,
        streetAddress: req.body.streetAddress,
        state: req.body.state,
        country: req.body.country,
    })
    CustomerAddressDetails.save()
    .then((data)=>{
        res.send('save category')
    })
    .catch(err=>console.log(err))
        
    }




exports.getCustomerAddress  = async (req, res) => {
        let data = await customerAddress.find({})
        res.json(data)
    }    



exports.deleteCustomerAddress=async(req,res)=>{
        let _id=req.params._id;
    try {
        let deleteCustomerAddress=await customerAddress.findByIdAndDelete({_id:_id})
        if(deleteCustomerAddress){
            return res.status(200).json({success:true,message:"Address deleted successfully"})
        }
    } catch (error) {
        return res.status(400).json({success:false,error:error.message})
        
    }
    }




exports.viewCustomerAddress =  async (req, res) => {
        let id = req.params.id
        let data = await customerAddress.find({ _id: id })
        res.json(data)
}






exports.updateCustomerAddress = async (req, res) => {
        let _id = req.params._id;
        let {name,email,phoneNumber,city,country,state,zipCode,streetAddress}=req.body;
    
    
        try {
            let findCustomer = await customerAddress.findById(_id);
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
    
                return res.json({ success: true, message: "customer address updated successfully", findCustomer });
            } else {
                return res.status(404).json({ success: false, message: "customer address not found" });
            }
        } catch (error) {
            return res.status(400).json({ success: false, error: error.message });
        }
    };