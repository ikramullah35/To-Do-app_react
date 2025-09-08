import React from "react";

const projects = [
  {
    title: "Calculator_app",
    desc: "A simple and responsive calculator built with React & Tailwindd.",
    href: "https://github.com/ikramullah35/Calculator_app",
    img: "src/assets/cal.jpg"
  },
  {
    title: "Counter_React",
    desc: "A dynamic counter app with increment, decrement, and reset features",
    href: "https://github.com/ikramullah35/Counter_React-",
    img: "src/assets/cou.jpg"
  },
  {
    title: "ColorPicker",
    desc: "An interactive color picker to choose and preview custom colors.",
    href: "https://github.com/ikramullah35/ColorPicker_React",
    img: "src/assets/col.jpg"
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-16">
      <h2 className="text-3xl font-bold text-center">Projects</h2>
      <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map(p => (
          <div key={p.title} className="bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg overflow-hidden transition">
            <img src={p.img} alt={p.title} className="w-full h-40 object-cover" />
            <div className="p-5">
              <h3 className="font-semibold text-lg">{p.title}</h3>
              <p className="text-sm mt-2 text-gray-600 dark:text-gray-300">{p.desc}</p>
              <a href={p.href} className="mt-4 inline-block text-indigo-600 hover:underline">View Project →</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
