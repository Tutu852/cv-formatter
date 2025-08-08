import React from "react";

export default function Footer() {
  return (
    <footer className="bg-blue-600 mt-12">
      <div className="max-w-6xl mx-auto px-4 py-6 text-center text-sm text-white">
        <p>
          © {new Date().getFullYear()} AI CV Formatter — Built with ❤️ by Your
          Team
        </p>

        <div className="mt-3 space-x-4">
          <a
            href="/about"
            className="hover:underline hover:text-gray-200 transition"
          >
            About
          </a>
          <a
            href="/privacy-policy"
            className="hover:underline hover:text-gray-200 transition"
          >
            Privacy Policy
          </a>
          <a
            href="/contact"
            className="hover:underline hover:text-gray-200 transition"
          >
            Contact
          </a>
        </div>

        <p className="mt-2 text-gray-200 text-xs">
          Making resumes smarter, faster, and ready for the EHS industry.
        </p>
      </div>
    </footer>
  );
}
