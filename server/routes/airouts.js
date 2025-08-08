const express = require('express')
// const aiController = require("../controllers/aicontorller")

const { checkCvFormatting } = require("../controllers/aicontorller");
const router = express.Router();

router.post("/checkCvFormatting", checkCvFormatting);
// router.get("/get-response",aiController.aifile)





module.exports = router