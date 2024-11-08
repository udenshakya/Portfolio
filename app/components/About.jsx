"use client";

import Image from "next/image";
import React, { useRef, useState } from "react";
import { animate, motion, useInView } from "framer-motion";

const About = () => {
  const [tab, setTab] = useState("skills");
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const mvariants = {
    initial: { opacity: 0, x: -200 },
    animate: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <motion.div ref={ref}>
      <motion.div
        variants={mvariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        id="about"
        className="sm:flex gap-20 mt-20 sm:mt-0 bg-gray-950/20  p-5 min-h-[500px] rounded-md"
      >
        <div className="flex-1 justify-center items-center flex">
          <Image
            className="rounded-lg"
            src={"/pic.jpg"}
            alt="photo"
            width={500}
            height={500}
          />
        </div>
        <div className="flex-1 ">
          <h1 className="text-3xl mt-6">About Me</h1>

          <p className="mt-4">
            My journey in the world of coding began with a fascination for
            turning innovative ideas into reality. With a keen eye for detail
            and a commitment to staying at the forefront of technology, I thrive
            on creating web applications that not only meet but exceed
            expectations.
          </p>
          <div className="flex gap-4 mt-3">
            <h2
              className={`hover:bg-blue-800 ${
                tab === "skills" ? "bg-blue-900" : "bg-blue-500"
              } transition-all rounded-md px-2 py-1 mb-4 cursor-pointer bg-blue-500`}
              onClick={() => setTab("skills")}
            >
              Skills
            </h2>
            <h2
              className={`hover:bg-blue-800 ${
                tab === "education" ? "bg-blue-900" : "bg-blue-500"
              } transition-all rounded-md px-2 py-1 mb-4 cursor-pointer bg-blue-500`}
              onClick={() => setTab("education")}
            >
              Education
            </h2>
            <h2
              className={`hover:bg-blue-800 ${
                tab === "achievement" ? "bg-blue-900" : "bg-blue-500"
              } transition-all rounded-md px-2 py-1 mb-4 cursor-pointer bg-blue-500`}
              onClick={() => setTab("achievement")}
            >
              Achievements
            </h2>
          </div>
          <div className=" min-h-44">
            {tab === "skills" && (
              <div>
                <ul className="list-disc p-2 ">
                  <li>React js</li>
                  <li>Node / Express js</li>
                  <li>Mongo DB</li>
                  <li>Next js</li>
                  <li>Tailwind CSS</li>
                  <li>HTML, CSS, JS</li>
                </ul>
              </div>
            )}
            {tab === "education" && (
              <div>
                <ul className="list-disc p-2">
                  <li>
                    St. Xavier's College-
                    <span className="text-xs"> College</span>
                  </li>
                  <li>
                    Little Angles College-
                    <span className="text-xs"> High School</span>
                  </li>
                  <li>
                    AVM School- <span className="text-xs"> School</span>
                  </li>
                </ul>
              </div>
            )}
            {tab === "achievement" && (
              <div>
                <ul className="list-disc p-2">
                  <li>Meta Front End Developer Certificate</li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </motion.div>

      <motion.div
        variants={mvariants}
        initial="initial"
        animate={isInView ? "animate" : "initial"}
        ref={ref}
        className="md:flex  w-full h-[50px] justify-center my-10 mb-40 md:mb-0"
      >
        <h1 className="text-center font-bold text-2xl flex justify-center items-center mr-5">
          TECH STACK
        </h1>
        <div className="md:flex md:flex-row flex flex-col gap-3">
          <div className="mr-4 flex justify-center ">
            <Image
              className="hover:scale-110 duration-200 transition-all"
              src={"HTML.svg"}
              width={60}
              height={60}
              alt="image"
            />
          </div>
          <div className="flex justify-center mr-4 gap-1">
            <Image
              className="hover:scale-110 duration-200 transition-all"
              src={"CSS.svg"}
              width={60}
              height={60}
              alt="image"
            />
            <Image
              className="hover:scale-110 duration-200 transition-all"
              src={"TailwindCSS-Dark.svg"}
              width={60}
              height={60}
              alt="image"
            />
            <Image
              className="hover:scale-110 duration-200 transition-all rounded-xl"
              src={"/sass.png"}
              width={55}
              height={60}
              alt="image"
            />
          </div>
          <div className="mr-4 flex justify-center gap-1">
            <Image
              className="hover:scale-110 duration-200 transition-all"
              src={"JavaScript.svg"}
              width={60}
              height={60}
              alt="image"
            />
            <Image
              className="hover:scale-110 duration-200 transition-all"
              src={"TypeScript.svg"}
              width={60}
              height={60}
              alt="image"
            />
          </div>
          <div className="mr-4 flex justify-center gap-1">
            <Image
              className="hover:scale-110 duration-200 transition-all"
              src={"React-Dark.svg"}
              width={60}
              height={60}
              alt="image"
            />
            <Image
              className="hover:scale-110 duration-200 transition-all"
              src={"NextJS-Dark.svg"}
              width={60}
              height={60}
              alt="image"
            />
            <Image
              className="hover:scale-110 duration-200 transition-all"
              src={"NodeJS-Dark.svg"}
              width={60}
              height={60}
              alt="image"
            />
            <Image
              className="hover:scale-110 duration-200 transition-all"
              src={"MongoDB.svg"}
              width={60}
              height={60}
              alt="image"
            />
            <Image
              className="hover:scale-110 duration-200 transition-all"
              src={"/express.png"}
              width={60}
              height={60}
              alt="image"
            />
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default About;
