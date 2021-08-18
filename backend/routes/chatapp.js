var express = require('express');
var router = express.Router();
const chatapp = require('../controller/chatapp.controller')

router.post('/addFiles', chatapp.storeImage);
router.get('/getAllFiles', chatapp.imageUploadForm);

module.exports = router;