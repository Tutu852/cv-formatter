exports.uploadDocumentToCloudinary = async (file, folder) => {
  try {
    const options = {
      folder,
      resource_type: "raw", 
    };

    console.log("Uploading document to Cloudinary:", options);

    const result = await cloudinary.uploader.upload(file, options);
    return result;
  } catch (error) {
    console.error("Document upload failed:", error);
    throw new Error("Document upload to Cloudinary failed");
  }
};