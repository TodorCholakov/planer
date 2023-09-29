import React from "react";
import { motion } from "framer-motion";
import { titleAnimation, containerIndex } from "../animations";
import BottomLine from "./components/BottomLine";

export default function Home({ images }) {
  return (
    <main className="bg-gradient-to-r from-rose-50 to-rose-300  flex flex-col items-center  ">
      <motion.ul
        className="font-mono  font-bold text-white text-5xl pl-2 pr-2  flex flex-col  justify-center"
        variants={containerIndex}
        initial="hidden"
        animate="show"
      >
        <motion.li className="pt-2 mt-2" variants={titleAnimation}>
          UNLEASH
        </motion.li>
        <motion.li className="pt-2" variants={titleAnimation}>
          YOUR
        </motion.li>
        <motion.li className="pt-2" variants={titleAnimation}>
          CREATIVITY
        </motion.li>
        <motion.li className="pt-2" variants={titleAnimation}>
          WITH
        </motion.li>
        <motion.li className="pt-2" variants={titleAnimation}>
          OUR
        </motion.li>
        <motion.li className="pt-2" variants={titleAnimation}>
          FREE
        </motion.li>
        <motion.li className="pt-2" variants={titleAnimation}>
          HIGH QUALITY
        </motion.li>
        <motion.li className="pt-2" variants={titleAnimation}>
          DIGITAL
        </motion.li>
        <motion.li className="pt-2 pb-2 mb-2" variants={titleAnimation}>
          CONTENT
        </motion.li>
      </motion.ul>
      <BottomLine />
     
    </main>
  );
}
