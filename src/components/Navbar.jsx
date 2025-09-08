import React from "react";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50 bg-white/80 dark:bg-gray-900/80 backdrop-blur border-b border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="font-bold text-xl text-indigo-600">MyPortfolio</a>
        <nav className="hidden md:flex gap-6">
          <a href="#home" className="hover:text-indigo-600">Home</a>
          <a href="#about" className="hover:text-indigo-600">About</a>
          <a href="#skills" className="hover:text-indigo-600">Skills</a>
          <a href="#projects" className="hover:text-indigo-600">Projects</a>
          <a href="/resume.pdf" target="_blank" rel="noreferrer" className="hover:text-indigo-600">Resume</a>
          <a href="#contact" className="hover:text-indigo-600">Contact</a>
        </nav>
      </div>
    </header>
  );
}
