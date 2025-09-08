import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16">
      <h2 className="text-3xl font-bold text-center">Contact Me</h2>
      <p className="mt-2 text-center text-gray-600 dark:text-gray-400">Let’s build something together 🚀</p>
      <form className="mt-10 max-w-2xl mx-auto grid grid-cols-1 gap-4">
        <input type="text" placeholder="Your Name" className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500" />
        <input type="email" placeholder="Your Email" className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 focus:ring-2 focus:ring-indigo-500" />
        <textarea placeholder="Your Message" className="p-3 rounded-lg border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 h-32 focus:ring-2 focus:ring-indigo-500"></textarea>
        <button type="submit" className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:opacity-90 transition">Send Message</button>
      </form>
    </section>
  );
}
