'use client'

import React, { useRef, useState } from "react";
import { IoLogoGithub } from "react-icons/io";
import { FaFacebook } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { motion,useInView } from "framer-motion";
import Link from "next/link";
import emailjs from '@emailjs/browser';


const Contact = () => {
const ref=useRef(null)
const formRef=useRef()
const [error, setError] = useState(false);
const [success, setSuccess] = useState(false);
const isInView = useInView(ref,{once:true})

const aboutvariants ={
  initial:{opacity:0,x:-200},
  animate:{opacity:1,x:0,transition:{duration:0.5}}
}
const formvariants ={
  initial:{opacity:0,y:200},
  animate:{opacity:1,y:0,transition:{duration:0.5}}
}

const sendEmail = (e) => {
  e.preventDefault();

  emailjs.sendForm('service_n1vl3kk', 'template_beb1brp', formRef.current, 'wnOZJCmfrwtFH_OfJ')
    .then((result) => {
        setSuccess(true)
    }, (error) => {
        setError(true)
    });
};

  return (
    <div className="" id="contact">
      <h1 className="text-center mt-20 text-4xl">Contact</h1>
      <div className="sm:flex  gap-20 mt-10">
        <motion.div variants={aboutvariants} initial='initial' animate={isInView?'animate':'initial'} ref={ref} className="flex-1 mt-16">
          <h1 className="text-xl">Let's Connect</h1><br/>
          

          <p>
            I am currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I'll try
            my best to get back to you!
          </p>
        </motion.div>
        <motion.div variants={formvariants} initial='initial' animate={isInView?'animate':'initial'} ref={ref} className="flex-1 mt-10 ">

          <form ref={formRef} onSubmit={sendEmail} className="flex flex-col">
            <label className="mt-3">Name</label>
            <input name="name" className="bg-gray-600 rounded-lg px-3 py-2 my-2" type="text"  required placeholder="Your Name" />
            <label className="mt-3">Email</label>
            <input name="email" className="bg-gray-600 rounded-lg px-3 py-2 my-2" type="email" required placeholder="johndoe@gmail.com" />
            <label className="mt-3">Message</label>
            <textarea name="message" rows={10} className="bg-gray-600 rounded-lg px-3 py-2 my-2" type="text" required placeholder="Let's talk about ..." />
            <button type="submit" className="bg-blue-500 mt-6 rounded-lg px-3 py-2">Send Message</button>
            {error && 'Error'}
            {success && 'Success'}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;
