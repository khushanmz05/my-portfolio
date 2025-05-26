"use client";

import Image from "next/image";
import Navbar from "../../../components/Navbar";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useState, useEffect } from "react";

export default function About() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-start justify-items-center min-h-screen p-8 pb-20 gap-12 sm:p-20 font-[family-name:var(--font-geist-sans)] bg-gray-50 text-gray-800">
      <Navbar />

      <main
        className={`max-w-3xl w-full text-center space-y-10
        transition-opacity duration-1000 ease-in-out
        ${loaded ? "opacity-100" : "opacity-0"}`}
      >
        <Image
          src="/Image.jpeg"
          alt="Portrait of Khushan Kanakrai"
          width={160}
          height={160}
          className="rounded-full mx-auto shadow-md"
        />

        <h1 className="text-4xl font-bold text-blue-700">About Me</h1>

        <p className="text-lg leading-relaxed">
          Hey! I&apos;m <strong>Khushan Kanakrai</strong>, a <strong>first-year software engineering student</strong> at <strong>Epitech</strong> in Barcelona.
          I&apos;m passionate about building technology from the ground up and currently immersed in low-level development using <strong>C</strong>.
        </p>

        <p className="text-lg leading-relaxed">
          I love solving complex problems and writing efficient, clean code. At Epitech, I’m diving deep into memory management, system programming,
          and core concepts that form the backbone of great software.
        </p>

        <div className="bg-white shadow-lg rounded-xl p-6 space-y-4">
          <h2 className="text-2xl font-semibold text-gray-900">Skills</h2>
          <ul className="grid sm:grid-cols-2 gap-2 text-left list-disc list-inside">
            {[
              "C (pointers, memory management, file I/O)",
              "Unix/Linux fundamentals",
              "Makefiles & shell scripting basics",
              "Git & GitHub",
              "Basic HTML & CSS",
              "Learning TypeScript + Next.js (this site!)",
            ].map((skill, index) => (
              <li
                key={index}
                className="hover:text-blue-600 hover:scale-105 transition-transform duration-200 cursor-pointer"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-8">
          <a
            href="/Khushan CV.pdf"
            download="Khushan_Kanakrai_CV.pdf"
            className="inline-block px-6 py-3 bg-blue-700 text-white rounded-lg hover:bg-blue-800 transition"
          >
            📄 Download Resume
          </a>
        </div>

        <div className="pt-8 space-y-3">
          <h2 className="text-xl font-semibold">Let&apos;s Connect</h2>
          <div className="flex justify-center gap-6 text-2xl">
            <a
              href="https://github.com/khushanmz05"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-gray-900 transition-colors"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://www.linkedin.com/in/khushan-kanakrai-170060310/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-700 transition-colors"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </main>

      <footer className="text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Khushan Kanakrai. All rights reserved.
      </footer>
    </div>
  );
}
