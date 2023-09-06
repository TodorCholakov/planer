import React from 'react'
import {
    Card,
    CardHeader,
    Divider,
    CardBody,
  } from "@nextui-org/react";
  import { motion, Variants } from "framer-motion";

export default function PetitStudioArt() {
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
    className="card-container"
    initial="offscreen"
    whileInView="onscreen"
    viewport={{ once: true, amount: 0.8 }}
  >
     <div className="splash"  />
      <motion.div className="flex h-52 w-fit p-4" variants={cardVariants}>

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

      </motion.div>
    
            </motion.div>
  )
}
