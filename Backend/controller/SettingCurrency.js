let currencyModel=require("../models/SettingCurrency")

exports.createCurrency=async(req,res)=>{
    let {name,symbol,code,isCryptocurrency,exchangeRate}=req.body;

try {
let NewCurrency=await currencyModel.create({
    name:name,
    symbol:symbol,
    code:code,
    isCryptocurrency:isCryptocurrency,
    exchangeRate:exchangeRate
})
return res.status(200).json({success:true,message:"created currency success",NewCurrency})
} catch (error) {
return res.status(400).json({success:false,error:error.message})
    
}
}


exports.GetAllCurrency=async(req,res)=>{
    const data = await currencyModel.find({})
    res.json(data)
}





exports.deleteCurrency=async(req,res)=>{
    let _id=req.params._id;
    try {
        let deleteCurrencyById=await currencyModel.findByIdAndDelete({_id:_id})
     if(deleteCurrencyById)

    {
        return res.status(200).json({success:true,message:"Employees deleted successfully",deleteCurrencyById})

    }else{

        return res.status(500).json({success:false,message:"User not found"})
    }

    } catch (error) {
        return res.status(200).json({success:true,error:error.message})
        
    }
}






////view Currency

exports.viewCurrency = async(req, res)=>{
    const id = req.params.id
    const data = await currencyModel.find({_id: id})
    res.json(data)
}





/////Update Currency


exports.updateCurrency = async(req, res)=>{
    const id = req.params.id
    const newData = req.body
    await currencyModel.findByIdAndUpdate(id, newData, {new : true})
    res.send("Currency updated")
}