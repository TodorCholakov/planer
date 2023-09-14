import React from "react";
import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react";
import { motion } from "framer-motion";

export default function WeAre() {
  
  const cardVariants = {
    offscreen: {
      y: 400,
    },
    onscreen: {
      y: 50,
      rotate: -1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };


  return (
    <motion.div
      className="flex flex-col flex-center items-center opacity-90 w-[calc(100vw-60px)] "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="card-container  hover:scale-105 transition duration-100 ease-in-out">
        <div className="splash" />
        <motion.div className="card m-2" variants={cardVariants}>
          <Card className="max-w-[600px] ">
            <CardHeader className="flex  justify-center">
              <h1 className="text-4xl font-semibold text-rose-700">
                BORING PART!
              </h1>
            </CardHeader>
            <Divider />
            <CardBody className="p-4">
              <p className="text-center">
                <span className="text-lg text-rose-700 "> We work with</span>,{" "}
                
                <span className="text-2xl font-medium"> React JS</span>,{" "}
                <span className="text-sm  text-rose-700"> Type Script</span>,
                <span className="text-xl font-medium text-fuchsia-400">
                  {" "}
                  Node JS
                </span>
                ,
                <span className="text-l font-semibold text-red-600">
                  {" "}
                  Taiwlwind
                </span>
                ,
                <span className="text-xl font-semibold text-cyan-700">
                  {" "}
                  CSS
                </span>
                ,
                <span className="text-sx font-semibold text-red-600">
                  {" "}
                  HTML5
                </span>
                ,<span className="text-lg text-black"> Responsive</span>,
                <span className="text-xl font-medium"> Rocket science</span>,
                <span className="text-3xl text-fuchsia-800"> Fancy trends</span>
                ,<span className="text-2xl text-cyan-700"> Unbeatable SEO</span>
                <span className="text-lg font-ligh"> Best designers</span>{" "}
                ,
                <span className="text-l font-semibold text-rose-700 ">
                  {" "}
                  Beyoned imagination backend speed
                </span>
                ,<span className="text-lg text-yellow-500"> Bug free</span>,
                <span className="text-2xl text-cyan-700">
                  {" "}
                  Best cookies in the town
                </span>
                ,
                <span className="text-xl font-medium  text-purple-600">
                  {" "}
                  CSS selectors
                </span>
                ,
                <span className="text-l font-medium ">
                  {" "}
                  Tons of documentation
                </span>
                ,
                <span className="text-lg text-red-600">
                  {" "}
                  Phenomenal user experience
                </span>
                ,<span className="text-2xl"> Frameworks</span>,
                <span className="text-xl text-black"> HTTPS</span>,
                <span className="text-xl text-gray-600"> SSL protocols</span>,
                <span className="text-2xl text-black"> Mobile first</span>,
                <span className="text-2xl text-cyan-700"> Promises</span>,
                <span className="text-xl font-medium"> SAAS</span>...
                <span className="text-lg text-black"> choosing us ensures you get the latest technology right out of the box

                </span>
              </p>
            </CardBody>
          </Card>
        </motion.div>
      </div>
    </motion.div>
  );
}
