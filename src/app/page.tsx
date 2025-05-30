"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Navbar from "../../components/Navbar";

export default function Home() {
  const [loaded, setLoaded] = useState(false);
  const [showLearnMore, setShowLearnMore] = useState(false);
  const learnMoreRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setLoaded(true);
  }, []);

  useEffect(() => {
    if (showLearnMore && learnMoreRef.current) {
      learnMoreRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [showLearnMore]);

  return (
    <div className="relative min-h-screen w-full font-[family-name:var(--font-geist-sans)] bg-black">
      {/* Background Image */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/background.jpg"
          alt="Background"
          fill
          priority
          className="object-cover brightness-50"
        />
      </div>

      {/* Content */}
      <div
        className={`flex flex-col items-center justify-center min-h-screen text-white text-center px-6 gap-10 backdrop-blur-sm transition-opacity duration-1000 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <Navbar />

        {/* Epitech Logo */}
        <div className="w-40 sm:w-52 drop-shadow-[0_0_8px_rgba(59,130,246,0.7)]">
          <Image
            src="/epitech.png"
            alt="Epitech Logo"
            width={400}
            height={100}
            className="w-full h-auto object-contain"
            priority
          />
        </div>

        {/* Main Text */}
        <main className="space-y-6 max-w-3xl">
          <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight tracking-wide">
            Welcome to My Portfolio
          </h1>
          <p className="text-lg sm:text-xl leading-relaxed max-w-xl mx-auto">
            Hi, I&apos;m <strong>Khushan Kanakrai</strong>, a student at{" "}
            <strong>Epitech Barcelona</strong>. This portfolio showcases my
            projects and journey into programming.
          </p>

          <button
            onClick={() => setShowLearnMore(true)}
            className="inline-block mt-6 px-6 py-3 bg-blue-600 hover:bg-blue-700 rounded-full text-white font-semibold shadow-lg transition focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2"
          >
            Learn More
          </button>
        </main>
      </div>

      {/* Learn More Section */}
      {showLearnMore && (
        <div
          ref={learnMoreRef}
          className="w-full bg-black/80 px-6 py-20 text-white text-left space-y-20 animate-fade-in"
        >
          {/* Learning Path */}
          <section className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Skills & Expertise</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-xl font-semibold mb-2">Programming Languages</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>C (data structures, memory management, syscalls)</li>
                  <li>TypeScript & JavaScript (modern web development)</li>
                  <li>Python (data analysis, machine learning)</li>
                  <li>SQL (database management)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Frameworks & Libraries</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Next.js & React (frontend development)</li>
                  <li>Node.js & Express.js (backend development)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Tools & Technologies</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Git & GitHub (version control)</li>
                  <li>Linux CLI & Shell Scripting</li>
                  <li>VS Code (development environment)</li>
                  <li>Postman (API testing)</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Data Analysis & Machine Learning</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Pandas (data manipulation)</li>
                  <li>Scikit-learn (machine learning)</li>
                  <li>Data Visualization</li>
                </ul>
              </div>

              <div>
                <h3 className="text-xl font-semibold mb-2">Soft Skills</h3>
                <ul className="list-disc list-inside space-y-1">
                  <li>Problem Solving</li>
                  <li>Team Collaboration</li>
                  <li>Communication</li>
                  <li>Adaptability</li>
                </ul>
              </div>
            </div>
          </section>

          {/* Contact Info */}
          <section className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-4">Contact Info</h2>
            <ul className="list-disc list-inside space-y-1">
              <li>
                Email:{" "}
                <a
                  href="mailto:khushan.kanakrai5@gmail.com"
                  className="underline text-blue-400 hover:text-blue-300"
                >
                  khushan.kanakrai5@gmail.com
                </a>
              </li>
              <li>
                Phone Number:{" "}
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300"
                >
                  +34617465190
                </a>
              </li>
            </ul>
          </section>

          {/* Collapse Button */}
          <div className="text-center">
            <button
              onClick={() => setShowLearnMore(false)}
              className="mt-10 px-6 py-3 bg-red-600 hover:bg-red-700 rounded-full text-white font-semibold shadow-lg transition"
            >
              Hide Info
            </button>
          </div>
        </div>
      )}

      {/* Footer */}
      <footer className="text-sm text-gray-300 text-center py-8 select-none">
        &copy; {new Date().getFullYear()} Khushan Kanakrai
      </footer>
    </div>
  );
}
