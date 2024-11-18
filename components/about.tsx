"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About Me</SectionHeading>
      <p className="mb-3">
        When I was nearing the end of my undergraduate studies, I found myself exploring the internet, searching for something that would truly spark my interest. I came across a course on{" "}
        <span className="font-medium">Software Quality Assurance</span> and testing. It was not something I had planned for, but it seemed intriguing, so I decided to give it a shot. As I worked through the course, the world of software quality testing started to make sense to me. I was fascinated by how thoughtful experiments and careful testing could make a huge difference in how software worked for people.
      </p>
  
      <p className="mb-3">
        That excitement pushed me to start looking for internships where I could gain real-world experience. After sending out many applications, I eventually landed an internship as a{" "}
        <span className="font-medium">Software Quality Assurance Engineer</span>. During those four months, I learned hands-on skills like writing test cases, running performance checks, and collaborating closely with developers.
      </p>
  
      <p className="mb-3">
        Towards the end of my internship, I received a full-time job offer from another company. I accepted and began working as a{" "}
        <span className="font-medium">Trainee Software Quality Assurance Engineer</span>. I continued to grow and learn, and today, I am still with that company, now working as a{" "}
        <span className="font-medium">Junior Software Quality Assurance Engineer</span>. I remain eager to refine and expand my skills every day.
      </p>
  
      <p className="mb-3">
        About six or seven months ago, I became curious about the rapid advancements in{" "}
        <span className="font-medium">Artificial Intelligence and Machine Learning</span>. Seeing how fast these technologies were evolving, I felt inspired to learn more. I went back to exploring online resources and began to understand the potential of AI to change the world, especially in areas like{" "}
        <span className="font-medium">Deep Learning and Medical Imaging</span>. Now, alongside my full-time job, I am actively involved in research, driven by a passion for creating innovative solutions that can make a real difference.
      </p>
  
      <p>
        I have always been captivated by the power of learning and the diverse ways in which technology intersects with human experience. My interests extend beyond the technical, drawing inspiration from{" "}
        <span className="font-medium">Psychology, Art, and Human Interaction</span>. These passions continue to shape who I am, fueling my growth as both an engineer and a researcher, always eager to make meaningful contributions to the world.
      </p>
    </motion.section>
  );  
  
  
}
