const express = require('express');
const router = express.Router();
const imageController = require('../controller/chatapp.controller.js');

router.get('/store-image',imageController.imageUploadForm);
router.post('/store-image',imageController.storeImage);

module.exports = router;