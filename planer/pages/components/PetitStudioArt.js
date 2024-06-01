import React from "react";
import { Card, CardHeader, Divider, CardBody } from "@nextui-org/react";
import { motion, Variants } from "framer-motion";
import { titleAnimation } from "../../animations";

export default function PetitStudioArt() {
  const container = {
    hidden: { x: 100 },
    show: {
      x: 0,
      transition: { duration: 0.75, ease: "easeOut", staggerChildren: 0.25 },
    },
  };
  const cardVariants = {
    offscreen: {
      y: 300,
    },
    onscreen: {
      y: 40,
      transition: {
        type: "spring",
        bounce: 0.4,
        duration: 0.8,
      },
    },
  };
  return (
    <motion.div
      className="opacity-90 card-container flex flex-col flex-center items-center w-[calc(100vw-60px)] "
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true, amount: 0.5 }}
    >
      <div className="splash" />
      <motion.div className="flex w-fit" variants={cardVariants}>
        <Card className="max-w-[600px]  hover:scale-105 transition duration-100 ease-in-out">
          <CardHeader
            className="flex justify-center"
            variants={container}
            initial="hidden"
            animate="show"
          >
            <motion.img
              key="1"
              className="w-20 p-2"
              src="/logoImages/petit.svg"
              alt="logo"
              variants={titleAnimation}
            />
            <motion.img
              key="2"
              className=" p-2 w-28"
              src="/logoImages/studio.svg"
              alt="logo"
              variants={titleAnimation}
            />
            <motion.img
              key="3"
              className="p-2 w-24"
              src="/logoImages/art.svg"
              alt="logo"
              variants={titleAnimation}
            />
          </CardHeader>
          <Divider />
          <CardBody className="p-4">
            <p className="text-left">
              <span className="text-xl text-gray-600">
                At Petit Studio Art, we specialize in developing fast,
                cost-effective websites and applications tailored precisely to
                your requirements. Our commitment to excellence is in every
                project, thanks to our passionate team of designers and
                developers. Whether you're looking for a striking portfolio
                website, a cutting-edge application with bespoke features, an
                event website that stands out, or any other digital solution,
                we've got you covered.
              </span>
            </p>
          </CardBody>
        </Card>
      </motion.div>
    </motion.div>
  );
}
