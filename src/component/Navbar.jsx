import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();
  return (
    <nav className="bg-white shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link to="/" className="text-xl font-bold text-indigo-600 flex items-center gap-2">
          <span className="inline-block w-8 h-8 bg-gradient-to-r from-indigo-500 to-indigo-300 rounded-full" />
          <span>AI CV Formatter</span>
        </Link>

        <div className="space-x-6">
          <Link
            to="/"
            className={`hover:text-indigo-600 ${location.pathname === "/" ? "font-semibold" : ""}`}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={`hover:text-indigo-600 ${location.pathname === "/about" ? "font-semibold" : ""}`}
          >
            About
          </Link>
        </div>
      </div>
    </nav>
  );
}
