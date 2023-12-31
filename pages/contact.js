import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@nextui-org/react";
import { db } from "../utils/firebase";
import { collection, addDoc } from "firebase/firestore";

export default function Contact() {
  const [dataCompetition, setDataCompetition] = useState([]);
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

  return (
    <div
   
      className="flex custom-min-h-screen flex-col p-2 w-full items-center bg-[url('/background.svg')] bg-no-repeat bg-cover"
    >
      <div className="card glass w-11/12  mt-10 mb-10">
        <div className="card-body">
          <h1 className="card-title text-center w-full">Contact</h1>
          <p>
            If you have any questions, concerns, or feedback, please don't
            hesitate to get in touch with us. You can reach us through the
            contact details provided below or by filling out the contact form.
          </p>
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
      </div>
    </div>
  );
}
