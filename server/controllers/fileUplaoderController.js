const path = require("path");
const cloudinary = require("cloudinary").v2;
const CV = require("../models/upload");
const { extractTextFromFile } = require("../utils/extractText");

exports.uploadCvController = async (req, res) => {
  try {
    const file = req.files.cv;

    if (!file) {
      return res.status(400).json({
        success: false,
        message: "No file uploaded",
      });
    }

    // ✅ Extract extension from original file name (not temp path)
    const fileExt = path.extname(file.name).toLowerCase();
    const allowedExt = [".pdf", ".docx", ".xlsx", ".xls"];

    if (!allowedExt.includes(fileExt)) {
      return res.status(400).json({
        success: false,
        message: "Unsupported file format. Only PDF, DOCX, XLS, XLSX are supported.",
      });
    }

    // ✅ Upload to Cloudinary
    const result = await cloudinary.uploader.upload(file.tempFilePath, {
      resource_type: "auto",
      folder: "cv-uploads",
    });

    // ✅ Extract text using original filename to get extension
    const extractedText = await extractTextFromFile(file.tempFilePath, file.name);

    // ✅ Save to MongoDB
    const newCV = await CV.create({
      originalName: file.name,
      cloudinaryUrl: result.secure_url,
      extractedText,
    });

    return res.status(200).json({
      success: true,
      message: "CV uploaded and processed successfully",
      data: newCV,
    });
  } catch (err) {
    console.error("❌ Upload Error:", err.message);
    return res.status(500).json({
      success: false,
      message: "Upload failed: " + err.message,
    });
  }
};
