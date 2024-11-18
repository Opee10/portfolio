"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { motion } from "framer-motion";

export default function Skills() {
  const { ref } = useSectionInView("Skills");

  return (
    <section
      id="skills"
      ref={ref}
      className="mb-20 max-w-[50rem] mx-auto scroll-mt-28 text-center"
    >
      <SectionHeading>My Skills</SectionHeading>

      {/* Programming Languages */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-blue-500">
          Programming Languages
        </h3>
        <div className="flex justify-center flex-wrap gap-3">
          {skillsData.programmingLanguages.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 text-white px-4 py-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Concepts */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-red-500">Concepts</h3>
        <div className="flex justify-center flex-wrap gap-3">
          {skillsData.concepts.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 text-white px-4 py-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Data Science & AI */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-green-500">
          Data Science & AI
        </h3>
        <div className="flex justify-center flex-wrap gap-3">
          {skillsData.dataScienceAndAI.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 text-white px-4 py-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Testing */}
      <div className="mt-6">
        <h3 className="text-lg font-semibold mb-2 text-yellow-500">Testing</h3>
        <div className="flex justify-center flex-wrap gap-3">
          {skillsData.testing.map((skill, index) => (
            <motion.div
              key={index}
              className="bg-gray-800 text-white px-4 py-2 rounded-md"
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 100 }}
            >
              {skill}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
