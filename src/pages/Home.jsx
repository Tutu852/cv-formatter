import React, { useState } from "react";
import CardFeature from "../component/CardFeature";
import FileUpload from "../component/FileUpload";
import AiReviewSection from "../component/AiReviewSection";
import { FileText, Brain, CheckCircle2 } from "lucide-react";
import CVCarousel from "../component/CVCarousel";

export default function Home() {
  const [fileData, setFileData] = useState(null);

  const features = [
    {
      icon: <FileText className="w-6 h-6 text-indigo-600" />,
      title: "Multi-Format Support",
      desc: "Upload CVs in PDF, DOCX, or Excel.",
      badgeColor: "bg-indigo-50",
    },
    {
      icon: <Brain className="w-6 h-6 text-green-600" />,
      title: "AI Enhancement",
      desc: "Automatic language & structure improvements.",
      badgeColor: "bg-green-50",
    },
    {
      icon: <CheckCircle2 className="w-6 h-6 text-purple-600" />,
      title: "Professional Formatting",
      desc: "ATS-friendly layout and styling.",
      badgeColor: "bg-purple-50",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="grid md:grid-cols-2 gap-6 items-center mb-8">
        <div>
          <h1 className="text-4xl font-bold leading-tight mb-4">
            Transform Your <span className="text-indigo-600">Resume</span> with
            AI
          </h1>
          <p className="text-gray-600 mb-4">
            Upload your CV in any format and get a polished, ATS-optimized
            resume ready to apply.
          </p>
          <div className="flex gap-3">
            <a
              href="#upload"
              className="bg-indigo-600 text-white px-4 py-2 rounded"
            >
              Start Formatting Now
            </a>
            <button className="bg-white border px-4 py-2 rounded">
              View Examples
            </button>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow">
          <div className="rounded-lg overflow-hidden">
            <CVCarousel />
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mb-8">
        {features.map((f, i) => (
          <CardFeature key={i} {...f} />
        ))}
      </div>

      <section id="upload">
        <FileUpload onUploadSuccess={setFileData} />
        <AiReviewSection fileData={fileData} />
      </section>
    </div>
  );
}
