import React, { useState } from "react";
import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { Button } from "@nextui-org/react";

export default function ContactForm() {
  const [showForm, setShowForm] = useState(true);
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
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 50,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      className="flex flex-col flex-center items-center h-auto m-2 w-[calc(100vw-60px)] "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="card-container w-full mb-10 max-w-[600px] hover:scale-105 transition duration-100 ease-in-out">
        <div className="splash" />
        <motion.div className="card" variants={cardVariants}>
          <Card className="">
            <CardHeader className="flex gap-3 justify-center">
            <h1 className="text-4xl font-semibold text-gray-700">
                Contact form
              </h1>
            </CardHeader>
            <Divider />
            <CardBody>
            {showForm ? (
       
     
        <form
          className="rounded-lg shadow-xl   flex flex-col  px-8 py-8 bg-white dark:bg-blue-500"
          onSubmit={handleSubmit}
        >
          
          <label
            htmlFor="fullname"
            className="text-gray-500 font-light mt-8 dark:text-gray-50"
          >
            Full name
            <span className="text-red-500 dark:text-gray-50">*</span>
          </label>
          <input
             required
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
          required
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
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
