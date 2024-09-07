const express = require('express');
const router = express.Router();
const administratorRouter = require('../controller/administratorController.js');
const uploads = require('../multer.js')


// ----------------Administrator-------------------

router.post('/addAdministrator', uploads.single('image') , administratorRouter.newadministrator)
router.get('/getAllAdministrator', administratorRouter.getAllAdministrator)
router.delete('/deleteAdministrator/:_id', administratorRouter.deleteAdministrator)
router.put('/updateAdministrator/:_id',uploads.single('image'), administratorRouter.updateAdministrator)
router.get('/viewAdministrator/:id', administratorRouter.viewAdministrator)


module.exports = router