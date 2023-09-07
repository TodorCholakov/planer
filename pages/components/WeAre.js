import React from 'react'
import {
    Card,
    CardHeader,
    Divider,
    CardBody,
  } from "@nextui-org/react";
  import { motion, Variants } from "framer-motion";

export default function WeAre() {
    const cardVariants = {
        offscreen: {
          y: 300
        },
        onscreen: {
          y: 50,
          rotate: -1,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };
  return (
    <motion.div
    className="card-container max-w-11/12"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}
  >
     <div className="splash"  />
      <motion.div className="card" variants={cardVariants}>
      <Card  
    
     className="max-w-[600px] ">
              <CardHeader className="flex gap-3 justify-center">
               <h1  className="text-center text-4xl">Dotn read this</h1>
              </CardHeader>
              <Divider />
              <CardBody>
                <p className="text-center">
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
          
            </Card>
      </motion.div>
    
            </motion.div>
  )
}
