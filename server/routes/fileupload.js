const express = require('express');
const { uploadCvController } = require("../controllers/fileUplaoderController"); 
const router = express.Router();

router.post("/upload", uploadCvController); 

module.exports = router;
