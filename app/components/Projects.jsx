"use client";

import Image from "next/image";
import Link from "next/link";
import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const projectvariants = {
    initial: { opacity: 0, y: 200 },
    animate: {
      opacity: 1,
      y: 0,
      transition: { duration: 1, staggerChildren: 0.2 },
    },
  };

  return (
    <div className="my-32 mt-80 md:mt-40" id="project">
      <h1 className="text-4xl  text-center">Projects</h1>
      <p className="text-red-600 text-xs text-center mt-5">Some project's data may take some time to load because the backend is deployed on a free server.</p>
      <motion.div
        variants={projectvariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        ref={ref}
        className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mt-20"
      >
        <motion.div
          variants={projectvariants}
          className="rounded-lg p-2 bg-gray-950/20  flex justify-center items-center flex-col "
        >
          <div className="h-[200px]">
            <Image
              className="w-full h-full rounded-lg overflow-hidden object-contain"
              src={"/MERNEcommerce.jpg"}
              alt="project"
              width={200}
              height={300}
            />
          </div>
          <div className="mt-3 w-[85%]">
            <h1 className="font-bold mb-4">Ecommerce web app</h1>
            <p className="text-sm mb-2" >Ecommerce web application using the MERN stack to buy and sell products. Has admin panel for admin only. </p>
          </div>
          <div className="flex gap-3 my-2">
            <Link
              href={
                "https://mern-ecommerce-client-o5t2wh4as-udens-projects.vercel.app/"
              }
              className="bg-blue-500 px-2 py-1 rounded-lg hover:bg-blue-800"
            >
              Demo
            </Link>
            <Link
              href={"https://github.com/udenshakya/MERN_Ecommerce-client"}
              className="bg-blue-500 px-2 py-1 rounded-lg hover:bg-blue-800"
            >
              Code
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={projectvariants}
          className="rounded-lg p-2 bg-gray-950/20  flex justify-center items-center flex-col"
        >
          <div className="h-[200px]">
            <Image
              className="w-full h-full rounded-lg overflow-hidden object-contain"
              src={"/Blog.jpg"}
              alt="project"
              width={200}
              height={200}
            />
          </div>
          <div className="mt-3 w-[85%]">
            <h1 className="font-bold mb-4">Blog web app</h1>
            <p className="text-sm mb-2" >
              Blogging web application, a full stack app using Next JS to read, post and manage blogs.
            </p>
          </div>
          <div className="flex gap-3 my-2">
            <Link
              href={"https://blog-app-six-indol.vercel.app/"}
              className="bg-blue-500 px-2 py-1 rounded-lg hover:bg-blue-800"
            >
              Demo
            </Link>
            <Link
              href={"https://github.com/udenshakya/blog_app"}
              className="bg-blue-500 px-2 py-1 rounded-lg hover:bg-blue-800"
            >
              Code
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={projectvariants}
          className="rounded-lg p-2 bg-gray-950/20  flex justify-center items-center flex-col"
        >
          <div className="h-[200px]">
            <Image
              className="w-full h-full rounded-lg overflow-hidden object-contain"
              src={"/Booking app.jpg"}
              alt="project"
              width={200}
              height={200}
            />
          </div>
          <div className="mt-3 w-[85%]">
            <h1 className="font-bold mb-4">Hotel Booking web application </h1>
            <p className="text-sm mb-2" >Hotel Booking web application using the MERN stack to book hotel room.</p>
          </div>
          <div className="flex gap-3 my-2">
            <Link
              href={"https://booking-app-frontend-psi.vercel.app/"}
              className="bg-blue-500 px-2 py-1 rounded-lg hover:bg-blue-800"
            >
              Demo
            </Link>
            <Link
              href={"https://github.com/udenshakya/Booking-app-frontend"}
              className="bg-blue-500 px-2 py-1 rounded-lg hover:bg-blue-800"
            >
              Code
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={projectvariants}
          className="rounded-lg p-2 bg-gray-950/20  flex justify-center items-center flex-col"
        >
          <div className="h-[200px]">
            <Image
              className="w-full h-full rounded-lg overflow-hidden object-contain"
              src={"/Restaurant.jpg"}
              alt="project"
              width={200}
              height={200}
            />
          </div>
          <div className="mt-3 w-[85%]">
            <h1 className="font-bold mb-4">Restaurant Site</h1>
            <p className="text-sm mb-2" >A Landing page for a restaurant with options to view and filter menus</p>
          </div>
          <div className="flex gap-3 my-2">
            <Link
              href={"https://restaurant-site-neon.vercel.app/"}
              className="bg-blue-500 px-2 py-1 rounded-lg hover:bg-blue-800"
            >
              Demo
            </Link>
            <Link
              href={"https://github.com/udenshakya/restaurant_site"}
              className="bg-blue-500 px-2 py-1 rounded-lg hover:bg-blue-800"
            >
              Code
            </Link>
          </div>
        </motion.div>
        <motion.div
          variants={projectvariants}
          className="rounded-lg p-2 bg-gray-950/20  flex justify-center items-center flex-col"
        >
          <div className="h-[200px]">
            <Image
              className="w-full h-full rounded-lg overflow-hidden object-contain"
              src={"/Car showcase.jpg"}
              alt="project"
              width={200}
              height={200}
            />
          </div>
          <div className="mt-3 w-[85%]">
            <h1 className="font-bold mb-4">Car ShowCase web site</h1>
            <p className="text-sm mb-2" >A website to showcase various cars with advanced search and filter functionality </p>
          </div>
          <div className="flex gap-3 my-2">
            <Link
              href={"https://car-showcase-csjn.vercel.app/"}
              className="bg-blue-500 px-2 py-1 rounded-lg hover:bg-blue-800"
            >
              Demo
            </Link>
            <Link
              href={"https://github.com/udenshakya/car_showcase"}
              className="bg-blue-500 px-2 py-1 rounded-lg hover:bg-blue-800"
            >
              Code
            </Link>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Projects;
