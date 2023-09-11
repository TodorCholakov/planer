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
      <PetitStudioArt />
      <WeAre />
      <HowWeWork />
      <ContactForm />
      <form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="hosted_button_id" value="64C9BU26ZEWWW" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donate_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_BG/i/scr/pixel.gif" width="1" height="1" />
</form>

    </div>
  );
}
