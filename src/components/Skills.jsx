import React from "react";

const skills = [
  "HTML", "CSS", "JavaScript", "React", "Tailwind CSS",
  "Node.js", "MongoDB", "TypeScript", "Next.js", "Git"
];

export default function Skills() {
  return (
    <section id="skills" className="py-16 bg-white dark:bg-gray-800 rounded-2xl shadow-md">
      <h2 className="text-3xl font-bold text-center">Skills</h2>
      <div className="mt-10 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
        {skills.map(skill => (
          <div key={skill} className="p-4 bg-gray-100 dark:bg-gray-700 rounded-xl text-center font-medium shadow hover:shadow-lg transition">
            {skill}
          </div>
        ))}
      </div>
    </section>
  );
}
