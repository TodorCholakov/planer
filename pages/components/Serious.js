import React from 'react'
import {
    Card,
    CardHeader,
    Divider,
    CardBody,
  } from "@nextui-org/react";
  import { motion, Variants } from "framer-motion";

export default function Serious() {
    const cardVariants = {
        offscreen: {
          y: 200
        },
        onscreen: {
          y: 50,
          transition: {
            type: "spring",
            bounce: 0.4,
            duration: 0.8
          }
        }
      };
  return (
    <motion.div
    className="card-container flex flex-col flex-center items-center w-[calc(100vw-20px)] "
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}
    
  >
     <div className="splash"  />
     <motion.div className="flex w-fit" variants={cardVariants}>
      <Card  
    
    className="max-w-[600px]  hover:scale-105 transition duration-100 ease-in-out">
             <CardHeader className="flex justify-center">
            
        <motion.img
          key="1"
          className="w-1/3 p-2"
          src="/logoImages/petit.svg"
          alt="logo"
        />
        <motion.img
          key="2"
          className="w-1/3 "
          src="/logoImages/studio.svg"
          alt="logo"
        />
        <motion.img
          key="3"
          className="w-1/3"
          src="/logoImages/art.svg"
          alt="logo"
        />
             </CardHeader>
             <Divider />
             <CardBody>
               <p className="text-center">
                 <span className="text-lg text-rose-700 "> We could be your choise if you need</span>,<br />
                 <span className="text-lg font-ligh"> Fresh start for your website</span>,{" "}
                 <span className="text-2xl font-medium"> Have idea but don't have enough resources</span>,{" "}
                 <span className="text-sm  text-rose-700"> Try to make</span>, 
                 <span className="text-xl font-medium text-fuchsia-400"> Node JS</span>, 
                 <span className="text-l font-semibold text-red-600"> Taiwlwind</span>, 
                 <span className="text-xl font-semibold text-cyan-700"> CSS</span>, 
                 <span className="text-sx font-semibold text-red-600"> HTML5</span>, 
                 <span className="text-lg text-black"> Responsive</span>, 
                 <span className="text-xl font-medium"> Rocket science</span>, 
                 <span className="text-3xl text-fuchsia-800"> Fancy trends</span>, 
                 <span className="text-2xl text-cyan-700"> Unbeatable SEO</span>, 
                 <span className="text-l font-semibold text-rose-700 "> Beyoned imagination backend speed</span>,
                 <span className="text-lg text-yellow-500"> Bug free</span>, 
                 <span className="text-2xl text-cyan-700"> Best cookies in the town</span>, 
                 <span className="text-xl font-medium  text-purple-600"> CSS selectors</span>, 
                 <span className="text-l font-medium "> Tons of documentation</span>, 
                 <span className="text-lg text-red-600"> Phenomenal user experience</span>, 
                 <span className="text-2xl"> Frameworks</span>, 
                 <span className="text-xl text-black"> HTTPS</span>, 
                 <span className="text-xl text-gray-600"> SSL protocols</span>, 
                 <span className="text-2xl text-black"> Mobile first</span>, 
                 <span className="text-2xl text-cyan-700"> Promises</span>, 
                 <span className="text-xl font-medium"> SAAS</span>...
                 <span className="text-lg text-black"> we can continue but it won't make any difference!{" "}</span>
               </p>
             </CardBody>
         
           </Card>
           </motion.div>
            </motion.div>
  )
}
