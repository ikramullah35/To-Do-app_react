import React from "react";

export default function Hero() {
  return (
    <section id="home" className="min-h-[90vh] flex flex-col md:flex-row items-center justify-center gap-10 py-16">
      <div className="flex-1 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
          Hi 👋, I’m <span className="text-indigo-600">Ikram ullah</span>
        </h1>
        <p className="mt-6 text-lg text-gray-600 dark:text-gray-300 max-w-xl">
          I’m a passionate <strong>Full-Stack Developer</strong> who builds fast,
          responsive, and modern web applications.
        </p>
        <div className="mt-8 flex flex-wrap gap-4 justify-center md:justify-start">
          <a href="#projects" className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:opacity-90 transition">View Projects</a>
          <a href="src/assets/cv.pdf" target="_blank" rel="noreferrer" className="px-6 py-3 border border-gray-300 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition">📄 Resume</a>
        </div>
      </div>
      <div className="flex-1 flex justify-center">
        <img
          src="src/assets/profile.jpg
"
          alt="Profile"
          className="w-64 h-64 md:w-80 md:h-80 rounded-full object-cover border-4 border-indigo-600 shadow-lg"
        />
      </div>
    </section>
  );
}
