import React from 'react'
import Image from 'next/image';
import { Button } from '@nextui-org/react';
import { useState } from 'react';
import { db } from "../utils/firebase"
import { collection, addDoc } from "firebase/firestore"; 
export default function Contact() {

  const [dataCompetition, setDataCompetition] = useState([])




  const handleSubmit = async (e) =>{
    e.preventDefault();
      // Add a new document with a generated id.
     
   
      let fullname = e.target.fullname.value;
      let email = e.target.email.value;
      let subject = e.target.subject.value;
      let message = e.target.message.value;
      const messageData = {[fullname]:[fullname, email, subject, message]}
      const new_obj = { ...dataCompetition["participants"],  ...messageData};
  
      console.log (new_obj)
  
      console.log ("kk")
      const docRef = await addDoc(collection(db, "email"), {
        new_obj
      });
      console.log("Document written with ID: ", docRef.id);
    
  }

  return (
    <div className="flex justify-center w-full bg-[url('/background.svg')] bg-no-repeat bg-cover">
       
       <div className="card glass w-unit-9xl mt-10 mb-10">
        <div className="card-body">
        <form className="rounded-lg shadow-xl  flex flex-col px-8 py-8 bg-white dark:bg-blue-500" onSubmit={handleSubmit}>
    <h1 className="text-2xl font-bold dark:text-gray-50">Send a message</h1>

    <label htmlFor="fullname" className="text-gray-500 font-light mt-8 dark:text-gray-50">Full name<span className="text-red-500 dark:text-gray-50">*</span></label>
    <input type="text" name="fullname" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

    <label htmlFor="email" className="text-gray-500 font-light mt-4 dark:text-gray-50">E-mail<span className="text-red-500">*</span></label>
    <input type="email" name="email" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

    <label htmlFor="subject" className="text-gray-500 font-light mt-4 dark:text-gray-50">Subject<span className="text-red-500">*</span></label>
    <input type="text" name="subject" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500" />

    <label htmlFor="message" className="text-gray-500 font-light mt-4 dark:text-gray-50">Message<span className="text-red-500">*</span></label>
    <textarea name="message" className="bg-transparent border-b py-2 pl-4 focus:outline-none focus:rounded-md focus:ring-1 ring-green-500 font-light text-gray-500"></textarea>
    <div className="flex flex-row items-center justify-start">
    <Button radius="sm" className="bg-gradient-to-tr from-violet-500 to-white-500 text-white shadow-lg" size="sm">
      Send
    </Button>
    </div>
  </form>
    
    </div>
    </div>

     </div>
  )
}

