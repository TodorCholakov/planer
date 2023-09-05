import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import { Button } from "@nextui-org/react";
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";
import {
  Card,
  CardFooter,
  CardHeader,
  Divider,
  CardBody,
} from "@nextui-org/react";
import { motion } from "framer-motion";

export default function Contact() {
  const [dataCompetition, setDataCompetition] = useState([]);
  const [showForm, setShowForm] = useState(true);
  const [intro, setIntro] = useState(true);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let fullname = e.target.fullname.value;
    let email = e.target.email.value;
    let subject = e.target.subject.value;
    let message = e.target.message.value;
    const messageData = { [fullname]: [fullname, email, subject, message] };
    const new_obj = { ...dataCompetition["participants"], ...messageData };
    console.log(new_obj);

    console.log("kk");
    const docRef = await addDoc(collection(db, "email"), {
      new_obj,
    });
    setShowForm(false);
    console.log("Document written with ID: ", docRef.id);
  };

  const item = {
    hidden: { opacity: 0 },
    show: { opacity: 1 },
  };
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
        staggerChildren: 0.1,
      },
    },
  };
  return (
    <div className="flex justify-center flex-col items-center">
      {!intro ? (
        <motion.img
          onClick={() => setIntro(true)}
          className="pl-2 pr-2 pt-2 w-auto max-h-screen pb-20 hover:cursor-pointer"
          src="/ordinary.svg"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1, transition: { duration: 0.7 } }}
        />
      ) : (
        <>
          <motion.div  className="flex">
            
            <Card  variants={item} className="max-w-[600px] mt-2">
              <CardHeader className="flex gap-3 justify-center">
                <motion.img
              key="3"
              variants={item}
              className=" p-2  h-24"
              src="/logoImages/dontRead.svg"
              alt="logo"
            />
            
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-justify">
                  <span className="text-lg text-rose-700 "> We work with</span>,{" "}
                  <span className="text-lg font-ligh"> Best designers</span>,{" "}
                  <span className="text-2xl font-medium"> React JS</span>,{" "}
                  <span className="text-sm  text-rose-700"> Type Script</span>, 
                  <span className="text-xl font-medium text-fuchsia-400"> Node JS</span>, 
                  <span className="text-l font-semibold text-red-600"> Taiwlwind</span>, 
                  <span className="text-xl font-semibold text-cyan-700">CSS</span>, 
                  <span className="text-sx font-semibold text-red-600"> HTML5</span>, 
                  <span className="text-lg text-black"> Responsive</span>, 
                  <span className="text-xl font-medium"> Rocket science</span>, 
                  <span className="text-3xl text-fuchsia-800"> Fancy trends</span>, 
                  <span className="text-2xl text-cyan-700"> Unbeatable SEO</span>, 
                  <span className="text-l font-semibold text-rose-700 "> Beyoned imagination backend speed</span>,
                  <span className="text-lg text-yellow-500"> Bug free</span>, 
                  <span className="text-2xl text-cyan-700"> Best cookies in the town</span>, 
                  <span className="text-xl font-medium  text-purple-600"> CSS Selectors</span>, 
                  <span className="text-l font-medium "> Tons of documentation</span>, 
                  <span className="text-lg text-red-600"> Phenomenal user experience</span>, 
                  <span className="text-2xl"> Frameworks</span>, 
                  <span className="text-xl text-black"> HTTPS</span>, 
                  <span className="text-xl text-gray-600"> SSL protocols</span>, 
                  <span className="text-2xl bg-gray-200 text-black"> Mobile first</span>, 
                  Promises, 
                  <span className="text-xl font-medium"> SAAS</span>...{" "}
                </p>
              </CardBody>
              <Divider />
              <CardFooter>
                <Link
                  isExternal
                  showAnchorIcon
                  href="https://github.com/nextui-org/nextui"
                >
                  We told you not to read :)
                </Link>
              </CardFooter>
            </Card>
          </motion.div>
          <motion.div
          
            onClick={() => setIntro(false)}
            variants={container}
            initial="hidden"
            animate="show"
            className="flex h-52 w-fit p-4"
          >
            <motion.img
              key="1"
              variants={item}
              className="w-1/3 p-2"
              src="/logoImages/petit.svg"
              alt="logo"
            />
            <motion.img
              key="2"
              variants={item}
              className="w-1/3 "
              src="/logoImages/studio.svg"
              alt="logo"
            />
            <motion.img
              key="3"
              variants={item}
              className="w-1/3"
              src="/logoImages/art.svg"
              alt="logo"
            />
          </motion.div>
        </>
      )}

      <h1>
        <br />
      </h1>

      {showForm ? (
        <form
          className="rounded-lg shadow-xl  flex flex-col px-8 py-8 bg-white dark:bg-blue-500"
          onSubmit={handleSubmit}
        >
          <h1 className="text-2xl font-bold dark:text-gray-50">
            Send a message
          </h1>
          <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Full name
            <span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          <input
            type="text"
            name="fullname"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            htmlFor="email"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            E-mail<span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="email"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            htmlFor="subject"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Subject<span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="subject"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          />

          <label
            htmlFor="message"
            className="text-gray-500 font-light mt-4 dark:text-gray-50"
          >
            Message<span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"
          ></textarea>
          <div className="flex flex-row items-center justify-start">
            <Button
              type="submit"
              radius="sm"
              className="bg-gradient-to-tr mt-4 from-violet-500 to-white-500 text-white shadow-lg"
              size="l"
            >
              Send
            </Button>
          </div>
        </form>
      ) : (
        <Link href="/">
          <div className="alert alert-success">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="stroke-current shrink-0 h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
              />
            </svg>
            <span>Your message has been sent successfully! Thank you!</span>
          </div>
        </Link>
      )}
    </div>
  );
}
