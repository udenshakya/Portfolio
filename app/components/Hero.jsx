"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { motion } from "framer-motion";
import { IoLogoGithub, IoLogoLinkedin } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import AnchorLink from "react-anchor-link-smooth-scroll";

const textVariants = {
  initial: {
    x: -200,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
      staggerChildren: 0.1,
    },
  },
};

const Hero = () => {
  return (
    
    <div className="sm:flex p-4 z-0 h-screen w-full mt-20 sm:mt-0 gap-20 sm:justify-center sm:items-center hero ">
      <motion.div
        variants={textVariants}
        initial="initial"
        animate="animate"
        className="flex-1  flex-col gap-2 justify-start items-start  w-full flex "
      >
        <motion.h1 variants={textVariants} className="text-5xl ">
          Hello I am Uden Shakya
        </motion.h1>

        <motion.h2 variants={textVariants} className="text-2xl font-serif text-gray-300 mt-1">
          Web Developer
        </motion.h2>
        <motion.p variants={textVariants} className="text-lg mt-2">
        A passionate web developer with a knack for crafting seamless and dynamic digital experiences.
        </motion.p>
        <motion.div variants={textVariants} className="flex gap-3 mt-4">
          <AnchorLink 
            href={"#contact"}
            className="rounded-lg px-4 py-2 bg-blue-600 hover:bg-blue-800 transition-all"
          >
            Contact
          </AnchorLink>
          <Link
            href={"/"}
            className="rounded-lg px-4 py-2 bg-blue-600 hover:bg-blue-800 transition-all"
          >
            Download CV
          </Link>

        </motion.div>
          <motion.div variants={textVariants} className="flex gap-3 mt-4">
            <Link href={'https://github.com/udenshakya'}><IoLogoGithub className="text-2xl" /></Link>
            <Link href={'https://www.facebook.com/uden.shakya.7/'}><FaFacebook className="text-2xl"/></Link>
            <Link href={'https://www.linkedin.com/in/uden-shakya-1749792a7/'}><IoLogoLinkedin className="text-2xl"/></Link>
          </motion.div>
      </motion.div>
      <div className="flex-1  w-full flex justify-center items-center">
        <div>
          <Image
            className="rounded-full mt-10 sm:2"
            src={"/photo.png"}
            height={300}
            width={300}
            alt="photo"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
