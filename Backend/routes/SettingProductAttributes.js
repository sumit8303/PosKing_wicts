const express = require('express');
const settingProductAttributes = require('../controller/SettingProductAttributes');
const router = express.Router();

router.post('/ceateProductAttributes', settingProductAttributes.Createattributes)

router.delete('/deleteProductAttributes/:_id', settingProductAttributes.deleteattributes);

router.put('/updateProductAttributes/:_id', settingProductAttributes.updateattributes);

router.get('/gretallProductAttributes', settingProductAttributes.getAllattributes);

router.get('/viewProductAttributes/:id', settingProductAttributes.viewSettingProductAttributs);


module.exports = router;