"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { researchData } from "@/lib/data";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function Research() {
  const { ref } = useSectionInView("Research");

  return (
    <section
      id="research"
      ref={ref}
      className="mb-20 max-w-[50rem] mx-auto scroll-mt-28 text-left"
    >
      <SectionHeading>Research</SectionHeading>

      <div className="mt-6 space-y-6">
        {/* Journal Papers */}
        <h3 className="text-lg font-semibold text-yellow-500 mb-2">Journal Papers</h3>
        <ul className="list-disc pl-6">
          {researchData.journalPapers.map((paper, index) => (
            <li key={index} className="mb-4">
              <p>
                <span className="font-bold">Title:</span> {paper.title}
              </p>
              <p>
                <span className="font-bold">Authors:</span> {paper.authors}
              </p>
              <p className="flex items-center">
                <span className="font-bold">Status:</span>
                <span className="ml-2 bg-purple-600 text-white px-2 py-1 rounded-full text-sm">
                  {paper.status}
                </span>
              </p>
            </li>
          ))}
        </ul>

        {/* Conference Papers */}
        <h3 className="text-lg font-semibold text-yellow-500 mb-2">Conference Papers</h3>
        <ul className="list-disc pl-6">
          {researchData.conferencePapers.map((paper, index) => (
            <li key={index} className="mb-4">
              <p>
                <span className="font-bold">Title:</span> {paper.title}
              </p>
              <p>
                <span className="font-bold">Authors:</span> {paper.authors}
              </p>
              <p className="flex items-center">
                <span className="font-bold">Status:</span>
                <span className="ml-2 bg-purple-600 text-white px-2 py-1 rounded-full text-sm">
                  {paper.status}
                </span>
              </p>
            </li>
          ))}
        </ul>

        {/* Book Chapters */}
        <h3 className="text-lg font-semibold text-yellow-500 mb-2">Book Chapters</h3>
        <ul className="list-disc pl-6">
          {researchData.bookChapters.map((chapter, index) => (
            <li key={index} className="mb-4">
              <p>
                <span className="font-bold">Title:</span> {chapter.title}
              </p>
              <p>
                <span className="font-bold">Authors:</span> {chapter.authors}
              </p>
              <p className="flex items-center">
                <span className="font-bold">Status:</span>
                <span className="ml-2 bg-purple-600 text-white px-2 py-1 rounded-full text-sm">
                  {chapter.status}
                </span>
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
