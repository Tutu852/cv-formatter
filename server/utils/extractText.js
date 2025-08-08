const fs = require("fs");
const path = require("path");
const pdfParse = require("pdf-parse");
const mammoth = require("mammoth");
const xlsx = require("xlsx");
const aiService = require("../services/ai.service");

exports.extractTextFromFile = async (filePath, originalFileName = "") => {
  const ext = path.extname(originalFileName || filePath).toLowerCase(); 

  try {
    switch (ext) {
      case ".pdf": {
        const fileBuffer = fs.readFileSync(filePath);
        const data = await pdfParse(fileBuffer);
        return data.text;
      }

      case ".docx": {
        const result = await mammoth.extractRawText({ path: filePath });
        return result.value;
      }

      case ".xlsx":
      case ".xls": {
        const workbook = xlsx.readFile(filePath);
        let result = "";

        workbook.SheetNames.forEach((sheet) => {
          const sheetData = xlsx.utils.sheet_to_csv(workbook.Sheets[sheet]);
          result += sheetData + "\n";
        });

        return result;
      }

      default:
        throw new Error("Unsupported file format. Only PDF, DOCX, XLS, XLSX are supported.");
    }
  } catch (err) {
    console.error("❌ Error extracting text from file:", err);
    throw err;
  }
};


