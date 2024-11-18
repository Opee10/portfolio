"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import SubmitBtn from "./submit-btn";
import toast from "react-hot-toast";
import { FaFacebookSquare, FaSkype, FaInstagram } from "react-icons/fa";

export default function Contact() {
  const { ref } = useSectionInView("Contact");

  return (
    <motion.section
      id="contact"
      ref={ref}
      className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center"
      initial={{
        opacity: 0,
      }}
      whileInView={{
        opacity: 1,
      }}
      transition={{
        duration: 1,
      }}
      viewport={{
        once: true,
      }}
    >
      <SectionHeading>Contact Me</SectionHeading>

      <p className="text-gray-700 -mt-6 dark:text-white/80">
        Please contact me directly at{" "}
        <a className="underline text-blue-400" href="mailto:opee.cse@gmail.com">
          opee.cse@gmail.com
        </a>{" "}
      </p>

      {/* Social Media Links */}
      <div className="flex justify-center gap-6 mt-6">
        <a
          href="https://www.facebook.com/shafiul.opee.1?mibextid=LQQJ4d"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 dark:text-white/80 dark:hover:text-blue-400 transition"
        >
          <FaFacebookSquare size={32} />
        </a>
        <a
          href="https://join.skype.com/invite/wMn1tDAEB6qV"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-blue-600 dark:text-white/80 dark:hover:text-blue-400 transition"
        >
          <FaSkype size={32} />
        </a>
        <a
          href="https://www.instagram.com/_.yourweirdmate._/igsh=MTJuODNncms5am1vMQ%3D%3D&utm_source=qr#"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-700 hover:text-pink-500 dark:text-white/80 dark:hover:text-pink-400 transition"
        >
          <FaInstagram size={32} />
        </a>
      </div>

{/* 
      <form
        className="mt-10 flex flex-col dark:text-black"
        action={async (formData) => {
          const { error } = await sendEmail(formData);

          if (error) {
            toast.error(error);
            return;
          }

          toast.success("Email sent successfully!");
        }}
      >
        <input
          className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="senderEmail"
          type="email"
          required
          maxLength={500}
          placeholder="Your email"
        />
        <textarea
          className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-100 transition-all dark:outline-none"
          name="message"
          placeholder="Your message"
          required
          maxLength={5000}
        />
        <SubmitBtn />
      </form> */} 
    </motion.section>
  );
}
