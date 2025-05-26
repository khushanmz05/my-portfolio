"use client";

import Navbar from "../../../components/Navbar";
import { useState, useEffect } from "react";
import { FaSchool, FaUniversity } from "react-icons/fa";

export default function Education() {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <div className="grid grid-rows-[auto_1fr_auto] items-start justify-items-center min-h-screen p-8 sm:p-20 bg-white text-gray-900 font-[family-name:var(--font-geist-sans)]">
      <Navbar />

      <main
        className={`max-w-3xl w-full transition-opacity duration-1000 ease-in-out space-y-10 ${
          loaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <h1 className="text-4xl font-bold text-blue-700 text-center">Education</h1>

        {/* Epitech */}
        <section className="bg-gray-100 p-6 rounded-xl shadow-md flex items-start gap-4">
          <FaUniversity className="text-blue-700 text-3xl mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              <a
                href="https://www.epitech.eu"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-blue-700"
              >
                Epitech Barcelona
              </a>
            </h2>
            <p className="text-sm text-gray-500">2024 – 2029</p>
            <p className="mt-2 text-base">
              Pursuing a <strong>Bachelor + Master Degree</strong> in Software Engineering.
              Currently focused on low-level programming, systems design, algorithms, and building real-world projects from scratch.
            </p>
          </div>
        </section>

        {/* High School */}
        <section className="bg-gray-100 p-6 rounded-xl shadow-md flex items-start gap-4">
          <FaSchool className="text-green-700 text-3xl mt-1" />
          <div>
            <h2 className="text-2xl font-semibold text-gray-800">
              <a
                href="https://www.centralhighmw.com" 
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline text-green-700"
              >
                Central High International School, Malawi
              </a>
            </h2>
            <p className="text-sm text-gray-500">2018 – 2024</p>
            <p className="mt-2 text-base">
              Completed high school with an <strong>IGCSE Certificate</strong>, laying a strong academic foundation for university studies.
            </p>
          </div>
        </section>
      </main>

      <footer className="text-sm text-gray-500 mt-12">
        &copy; {new Date().getFullYear()} Khushan Kanakrai
      </footer>
    </div>
  );
}
