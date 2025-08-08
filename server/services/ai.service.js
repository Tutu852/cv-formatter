// ai.service.js
const genAI = require('@google/generative-ai'); 
const dotenv = require('dotenv');
dotenv.config();

const ai = new genAI.GoogleGenerativeAI(process.env.GOOGLE_GEMINI_KEY); 
const model = ai.getGenerativeModel({ model: "gemini-1.5-flash",
    systemInstruction:``
 });  

async function generateContent(prompt) {
  const result = await model.generateContent(prompt);
  const response = await result.response;
  return response.text();
}

module.exports = generateContent;
