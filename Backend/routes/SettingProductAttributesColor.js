const express = require('express');
const settingProductAttributeColor = require('../controller/SettingProductAttributesColor');
const router = express.Router();


router.post('/ceateProductAttributesColor', settingProductAttributeColor.CreateattributesColor)

router.delete('/deleteProductAttributesColor/:_id', settingProductAttributeColor.deleteattributesColor);

router.put('/updateProductAttributesColor/:_id', settingProductAttributeColor.updateattributesColor);

router.get('/gretallProductAttributesColor', settingProductAttributeColor.getAllattributesColor);

router.get('/viewProductAttributesColor/:_id', settingProductAttributeColor.viewSettingProductAttributsColor);


module.exports = router;
