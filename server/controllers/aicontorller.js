const aiService = require("../services/ai.service")

exports.aifile = async (req,res)=>{
     const prompt = req.query.prompt;

    if(!prompt){
        return res.status(400).send("Prompt is required")
    }
    const response = await aiService(prompt);

    res.send(response);
}

exports.checkCvFormatting = async (req, res) => {
  try {
    const { extractedText } = req.body;

    if (!extractedText) {
      return res.status(400).json({ message: "Extracted CV text is required" });
    }

    const prompt = `
You are an expert in resume formatting based on EHS standards.

Analyze the following resume and identify:
- Whether it's properly formatted
- Any formatting issues
- Suggestions for improvement

Resume:
${extractedText}
    `;

    const aiResponse = await aiService(prompt);

    res.status(200).json({
      success: true,
      result: aiResponse,
    });

  } catch (error) {
    console.error("AI formatting check failed:", error.message);
    res.status(500).json({
      success: false,
      message: "Failed to check CV formatting",
    });
  }
};
