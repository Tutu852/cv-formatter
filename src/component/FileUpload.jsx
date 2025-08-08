import React, { useState } from "react";
import { uploadCV } from "../services/operations/file";
import toast from "react-hot-toast";

export default function FileUpload({ onUploadSuccess }) {
  const [selectedFile, setSelectedFile] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChoose = (e) => {
    setSelectedFile(e.target.files?.[0] ?? null);
  };

  const handleUpload = async () => {
    if (!selectedFile) return toast.error("Select a file first");
    setLoading(true);
    const toastId = toast.loading("Uploading...");
    try {
      const res = await uploadCV(selectedFile);
      toast.success("Upload successful");
      // Pass to parent — backend should return something like { success, fileId, text, previewUrl }
      onUploadSuccess(res);
    } catch (err) {
      console.error(err);
      toast.error(err.message || "Upload failed");
    } finally {
      toast.dismiss(toastId);
      setLoading(false);
    }
  };

  return (
    <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-6 mt-8">
      <div className="border-dashed border-2 border-gray-200 rounded-xl p-6 bg-white flex flex-col items-center justify-center">
        <div className="mb-4 text-center">
          <div className="mb-2 text-3xl">📄</div>
          <p className="text-gray-600 mb-2">Drop your CV here, or click to browse</p>
          <p className="text-xs text-gray-400 mb-4">Supports PDF, DOCX, XLSX (max 10MB)</p>
        </div>

        <input
          type="file"
          accept=".pdf,.doc,.docx,.xlsx"
          onChange={handleChoose}
          className="mb-4"
        />
        <button
          onClick={handleUpload}
          disabled={!selectedFile || loading}
          className="bg-indigo-600 text-white px-5 py-2 rounded disabled:opacity-60"
        >
          {loading ? "Uploading..." : "Choose & Upload"}
        </button>
      </div>

      <div className="bg-white rounded-xl p-6 border shadow-sm">
        <h4 className="font-semibold mb-2">Preview Will Appear Here</h4>
        <p className="text-sm text-gray-500 mb-3">After uploading your CV, the AI preview / extracted text will show here.</p>

        <div className="h-40 flex items-center justify-center rounded border border-dashed border-gray-200">
          <p className="text-sm text-gray-400">No preview yet</p>
        </div>
      </div>
    </div>
  );
}
