import { createClient } from "contentful";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Donate from "./components/Donate";
import { titleAnimation, container } from "../animations"

export async function getStaticProps() {
  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
  });

  const res = await client.getEntries({ content_type: "images" });
  return {
    props: { images: res.items },
  };
}

export default function Home({ images }) {
  return (
    <main className="h-14 bg-gradient-to-r from-rose-50 to-rose-300  flex flex-col items-center min-h-[calc(100vh-60px)]">
      <motion.div className="font-mono font-bold text-white text-6xl" variants={container} initial="hidden" animate="show">

        <motion.div className="mt-2" variants={titleAnimation}>We</motion.div>

        <motion.div className="mt-2" variants={titleAnimation}>create</motion.div>
    
        <motion.div className="mt-2" variants={titleAnimation}>digital</motion.div>

        <motion.div className="mt-2" variants={titleAnimation}>content</motion.div>
   
        <motion.div className="mt-2" variants={titleAnimation}>completely</motion.div>
   
        <motion.div className="mt-2" variants={titleAnimation}>for</motion.div>
    
        <motion.div className="mt-2" variants={titleAnimation}>free</motion.div>

      </motion.div>

      <Donate />
    </main>
  );
}
