import React from "react";
import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";

export default function HowWeWork() {
  const cardVariants = {
    offscreen: {
      y: 200,
    },
    onscreen: {
      y: 50,
      rotate: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      className="card-container flex flex-col flex-center items-center w-[calc(100vw-20px)] "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.8 }}
    >
      <div className="splash" />
      <motion.div className="flex w-fit m-2" variants={cardVariants}>
        <Card className="max-w-[600px]  hover:scale-105 transition duration-100 ease-in-out">
          <CardHeader className="flex justify-center">
            <h1 className="text-4xl font-semibold text-gray-700">
              How we work
            </h1>
          </CardHeader>
          <Divider />
          <CardBody>
            <p className="text-center">
              
            <span className="text-2xl text-cyan-700">
                {" "}
                You have a clear vision of what you want to achieve? leave the rest to us. We'll bring your ideas to life.    </span>
                <br /><br />
                    <br /><span className="text-xl text-cyan-700">Fill out the
                contact form below and share your vision. Is it a webpage, a
                captivating portfolio, or perhaps a unique application? We're
                thrilled to offer you a complimentary demo design for your
                project. If you find it appealing, we'll move forward to discuss
                all the finer details, timelines, and everything in between.
            
              </span>
              
            </p>
          </CardBody>
        </Card>
      </motion.div>
    </motion.div>
  );
}
