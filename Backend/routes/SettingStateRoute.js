const express = require('express');
const router = express.Router();
const addSettingState = require('../controller/SettingState.js')

router.post('/createState', addSettingState.createState);

router.get('/getallState', addSettingState.getAllState);

router.delete('/deleteState/:_id', addSettingState.deleteState);

router.put('/updateState/:id', addSettingState.updateState);

router.get('/viewState/:id', addSettingState.viewState);





module.exports = router;