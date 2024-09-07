let express = require("express")
let uploads = require("../multer.js")
const addCustomerRouter = require('../controller/AddCustomer.js');
let router=express.Router()



// -----------------Customer------------------

router.post('/addCustomer',uploads.single('image'), addCustomerRouter.newCustomer)
// router.get('/getAllCustomer', addCustomerRouter.getAllCustomer)
router.get('/getCustomer', addCustomerRouter.getAllCustomer)


router.delete('/deleteCustomer/:_id', addCustomerRouter.deleteCustomer)
router.put('/updateCustomer/:_id' ,uploads.single('image'), addCustomerRouter.updateCustomer)

router.get('/filterCustomer', addCustomerRouter.CustomerFilter)
router.get('/viewCustomer/:id', addCustomerRouter.viewCustomer)


module.exports = router