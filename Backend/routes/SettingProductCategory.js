const express = require('express');
const router = express.Router();
const uploads = require('../multer.js')
const settingProduct = require('../controller/SettingProductCategory.js');



router.post('/newcategory', uploads.single('image'), settingProduct.CreateCategory)
router.get('/getAllSettingCategory',  settingProduct.getAllCategoy)
router.delete('/deleteCategory/:_id', settingProduct.deleteCategory)
router.get('/viewSettingProduct/:id', settingProduct.viewProductSetting)
router.put('/updateCategory/:id', uploads.single("image"), settingProduct.updateCategory)


module.exports = router
