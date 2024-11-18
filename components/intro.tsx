"use client";

import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useSectionInView } from "@/lib/hooks";
import { useActiveSectionContext } from "@/context/active-section-context";

export default function Intro() {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionContext();

  return (
    <section
      ref={ref}
      id="home"
      className="mb-28 max-w-[50rem] text-center sm:mb-0 scroll-mt-[100rem]"
    >
      <div className="flex items-center justify-center">
        <div className="relative">
          <motion.div
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "tween",
              duration: 0.2,
            }}
          >
            <Image
              src="/opeedp.jpg"
              alt="Shafiul Opee"
              width="280"
              height="280"
              quality="100"
              priority={true}
              className="h-28 w-28 sm:h-36 sm:w-36  rounded-full object-cover border-[0.35rem] border-white shadow-xl"
            />
          </motion.div>

          <motion.span
            className="absolute bottom-1 right-1.5 text-3xl"
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              type: "spring",
              stiffness: 125,
              delay: 0.1,
              duration: 0.7,
            }}
          >
            🚀
          </motion.span>
        </div>
      </div>

      <motion.h1
  className="mb-10 mt-4 px-4 text-lg font-light leading-relaxed sm:text-2xl"
  initial={{ opacity: 0, y: 100 }}
  animate={{ opacity: 1, y: 0 }}
>
  <span className="font-bold text-gray-800">Hello, I'm Shafiul Opee.</span>{" "}
  A <span className="text-accent">Software QA Engineer</span> with 
  <span className="font-medium"> over 1 year of experience</span> in testing 
  and refining web and mobile applications, focusing on API and performance 
  testing.{" "}
  <span className="text-blue-500">
    Beyond my professional role, I am an AI Researcher,
  </span>{" "}
  driven by a passion for applying <span className="font-medium">Deep Learning</span> techniques 
  to solve challenges in <span className="font-medium">Medical Imaging</span> and{" "}
  <span className="font-medium">Computer Vision</span>. My work aims to push 
  the boundaries of <span className="font-medium">Artificial Intelligence </span> 
  to create impactful solutions in healthcare and beyond.
</motion.h1>


      <motion.div
        className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.1,
        }}
      >
        <Link
          href="#contact"
          className="group bg-gray-900 text-white px-4 py-2 flex items-center gap-2 rounded-md outline-none  hover:bg-gray-950 active:scale-105 transition"
          onClick={() => {
            setActiveSection("Contact");
            setTimeOfLastClick(Date.now());
          }}
        >
          Contact me here{" "}
          <BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
        </Link>

        <a
          className="group bg-white px-4 py-2 flex items-center gap-2 rounded-md outline-none  active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10  dark:text-white/60 hover:dark:bg-white/5  hover:bg-gray-200"
          href="/Shafiul_Ajam_Opee.pdf"
          download
        >
          Download CV{" "}
          <HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
        </a>

        <a
          className="bg-white p-3 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60 hover:dark:bg-white/5  hover:bg-gray-200"
          href="https://www.linkedin.com/in/shafiul-opee/"
          target="_blank"
        >
          <BsLinkedin />
        </a>

        <a
          className="bg-white p-3 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full  hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 hover:dark:bg-white/5 dark:text-white/60 hover:bg-gray-200"
          href="https://github.com/Opee10"
          target="_blank"
        >
          <FaGithubSquare />
        </a>
      </motion.div>
    </section>
  );
}
