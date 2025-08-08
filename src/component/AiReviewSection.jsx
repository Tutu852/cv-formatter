import { useState } from "react";
import { getAIReview } from "../services/operations/ai";
import { uploadCV } from "../services/operations/file";

export default function CVReviewSection() {
  const [file, setFile] = useState(null);
  const [cvText, setCvText] = useState("");
  const [review, setReview] = useState("");
  const [loading, setLoading] = useState(false);

const handleUpload = async () => {
  if (!file) {
    alert("Please select a file before uploading");
    return;
  }
  try {
    setLoading(true);
    const res = await uploadCV(file);

    console.log("Upload Response:", res);

    // Access correct field from backend
    setCvText(res.data?.extractedText || "");
    setLoading(false);

    alert("File uploaded successfully!");
  } catch (err) {
    console.error(err);
    setLoading(false);
    alert("Upload failed");
  }
};



  const handleReview = async () => {
    if (!cvText) {
      alert("Please upload a CV first!");
      return;
    }
    try {
      setLoading(true);
      const res = await getAIReview(cvText);
      setReview(res.result || "No response from AI");
    } catch (err) {
      console.error(err);
      alert("AI review failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-6 mt-8 bg-white rounded shadow max-w-lg mx-auto">
      <h2 className="text-xl font-semibold mb-4">AI CV Formatter</h2>

      <input
        type="file"
        accept=".pdf,.doc,.docx"
        onChange={(e) => setFile(e.target.files[0])}
        className="mb-4"
      />

      <div className="flex gap-2">
        <button
          onClick={handleUpload}
          disabled={!file || loading}
          className="bg-blue-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Uploading..." : "Upload CV"}
        </button>
        <button
          onClick={handleReview}
          disabled={!cvText || loading}
          className="bg-green-600 text-white px-4 py-2 rounded"
        >
          {loading ? "Reviewing..." : "Get AI Review"}
        </button>
      </div>

      {review && (
        <div className="mt-9 p-4 border rounded bg-gray-50">
          <h3 className="font-semibold mb-2">AI Review</h3>
          <p>{review}</p>
        </div>
      )}
    </div>
  );
}
