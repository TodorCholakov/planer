import React, { useState } from "react";
import WeAre from "./components/WeAre";
import { motion } from "framer-motion";
import PetitStudioArt from "./components/PetitStudioArt";
import HowWeWork from "./components/HowWeWork";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  const [dataCompetition, setDataCompetition] = useState([]);
 
  const [intro, setIntro] = useState(true);

  

  return (
    <div className="flex flex-col flex-center mx-auto items-center w-full">
      <motion.div
        className="flex justify-center w-full bg-slate-100 h-[calc(100vh-60px)] content-center "
        initial={{ opacity: 0 }}
        animate={{ opacity: 1, transition: { duration: 0.7 } }}
      >
        <img
          className=""
          src="/ordinary.svg"
        />
      </motion.div>
     
      <PetitStudioArt />
      <WeAre />
      <HowWeWork />
      <ContactForm />
      <h1>
        <br />
      </h1>

      
    </div>
  );
}
