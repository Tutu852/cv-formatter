import React from "react";
import CardFeature from "../component/CardFeature";
import { Sparkles, Cpu, Layout } from "lucide-react";

export default function About() {
  const features = [
    { icon: <Sparkles className="w-6 h-6 text-indigo-600"/>, title: "Multi-Format Support", desc: "Upload PDF, DOCX, XLSX.", badgeColor: "bg-indigo-50"},
    { icon: <Cpu className="w-6 h-6 text-green-600"/>, title: "AI Enhancement", desc: "AI models improve clarity and tone.", badgeColor: "bg-green-50"},
    { icon: <Layout className="w-6 h-6 text-purple-600"/>, title: "Professional Formatting", desc: "Get recruiter-friendly structure.", badgeColor: "bg-purple-50"},
  ];

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="text-center mb-10">
        <h1 className="text-3xl font-bold">About AI CV Formatter</h1>
        <p className="text-gray-600 mt-3">We combine document parsing and LLM-based formatting to give you a professional resume.</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {features.map((f,i) => <CardFeature key={i} {...f} />)}
      </div>

      <div className="mt-10 bg-white border rounded-xl p-6">
        <h3 className="font-semibold mb-2">How it works</h3>
        <ol className="list-decimal list-inside text-sm text-gray-600">
          <li>Upload your CV in any supported format.</li>
          <li>We extract text & structure from your document.</li>
          <li>AI suggests language & format improvements.</li>
          <li>Download the polished CV and apply.</li>
        </ol>
      </div>
    </div>
  );
}
