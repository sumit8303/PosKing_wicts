const express = require('express');
const router = express.Router();
const administratorRouter = require('../controller/administratorController.js');


// ----------------Administrator-------------------

router.post('/addAdministrator',  administratorRouter.newadministrator)
router.get('/getAllAdministrator', administratorRouter.getAllAdministrator)
router.delete('/deleteAdministrator/:_id', administratorRouter.deleteAdministrator)
router.put('/updateAdministrator/:_id',administratorRouter.updateAdministrator)
router.get('/viewAdministrator/:id', administratorRouter.viewAdministrator)


module.exports = router
