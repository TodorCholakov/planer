import React, { useState } from "react";
import WeAre from "./components/WeAre";
import { easeOut, motion } from "framer-motion";
import PetitStudioArt from "./components/PetitStudioArt";
import HowWeWork from "./components/HowWeWork";
import ContactForm from "./components/ContactForm";

export default function Contact() {
  const [dataCompetition, setDataCompetition] = useState([]);
 
  const [intro, setIntro] = useState(true);



  return (
    <motion.div   className="bg-gradient-to-r from-blue-50 to-blue-300 flex flex-col flex-center mx-auto items-center w-full" >
      <PetitStudioArt />
      <WeAre />
      <HowWeWork />
      <ContactForm />
      
      <div>
        <a href="https://www.buymeacoffee.com/tscholakovi" target="_blank">
          <img 
          src="https://cdn.buymeacoffee.com/buttons/v2/default-yellow.png" 
          alt="Buy Me A Coffee" 
          className="h-12 w-48" />
          </a>
        </div>
    </motion.div>
  );
}
