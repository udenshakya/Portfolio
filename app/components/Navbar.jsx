"use client";

import Link from "next/link";
import React, { useState } from "react";
import { RxHamburgerMenu } from "react-icons/rx";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion";
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => {
  const [toggleNav, settoggleNav] = useState(false);

  const textVariants = {
    initial: {
      x: 200,
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
  

  return (
    <nav className="container fixed top-0 right-0 left-0 mx-auto   bg-opacity-95 bg-gray-900 ">
      <div className=" px-6 flex justify-between items-center h-20 w-full">
        <Link href={"/"} >
          <motion.div
          className="text-2xl"
            initial={{ opacity: 0, scale: 0.5 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.2 }}
          >
            Portfolio
          </motion.div>
        </Link>
        <div className="sm:flex gap-6 hidden">
          <AnchorLink offset='100'
            className="hover:underline hover:text-gray-300 text-xl"
            href={"#about"}
          >
            About
          </AnchorLink>
          <AnchorLink offset='100'
            className="hover:underline hover:text-gray-300 text-xl"
            href={"#project"}
          >
            Projects
          </AnchorLink>
          <AnchorLink offset='100'
            className="hover:underline hover:text-gray-300 text-xl"
            href={"#contact"}
          >
            Contact
          </AnchorLink>
        </div>
        <div className="sm:hidden block">
          {toggleNav ? (
            <IoMdClose
              className="text-2xl"
              onClick={() => settoggleNav(false)}
            />
          ) : (
            <RxHamburgerMenu
              className="text-2xl"
              onClick={() => settoggleNav(true)}
            />
          )}
        </div>
      </div>
      <div className="">
        {toggleNav && (
          <motion.div  variants={textVariants}
          initial="initial"
          animate="animate" className="flex flex-col gap-4 p-3 mt-2 rounded-lg   bg-gray-900 justify-center items-center   sm:hidden ">
            <div className="hover:underline">
              <AnchorLink className="w-full" href={"#about"}>
                About
              </AnchorLink>
            </div>
            <div className="hover:underline">
              <AnchorLink className="" href={"#project"}>
                Projects
              </AnchorLink>
            </div>
            <div className="hover:underline">
              <AnchorLink className="" href={"#contact"}>
                Contact
              </AnchorLink>
            </div>
          </motion.div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
