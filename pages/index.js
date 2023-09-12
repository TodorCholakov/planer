import { createClient } from "contentful";
import React from "react";
import { motion } from "framer-motion";
import { titleAnimation, containerIndex } from "../animations";


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
    <main className="bg-gradient-to-r from-rose-50 to-rose-300  flex flex-col items-center  min-h-[calc(100vh-60px)]">
      <motion.div
        className="font-mono font-bold text-white text-6xl pl-2  pr-2 h-full"
        variants={containerIndex}
        initial="hidden"
        animate="show"
      >
        <motion.div className="mt-2" variants={titleAnimation}>
          We
        </motion.div>

        <motion.div className="mt-2" variants={titleAnimation}>
          create
        </motion.div>

        <motion.div className="mt-2" variants={titleAnimation}>
          digital
        </motion.div>

        <motion.div className="mt-2" variants={titleAnimation}>
          content
        </motion.div>

        <motion.div className="mt-2" variants={titleAnimation}>
          completely
        </motion.div>

        <motion.div className="mt-2" variants={titleAnimation}>
          for
        </motion.div>

        <motion.div className="mt-2" variants={titleAnimation}>
          free
        </motion.div>
        <motion.div className="flex items-stretch w-full h-full" variants={titleAnimation} >
    <svg

      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 1533 495"
    >
      <path fill="none" d="M0 0H1532.56V494.748H0z"></path>
      <clipPath id="_clip1">
        <path d="M0 0H1532.56V494.748H0z"></path>
      </clipPath>
      <g clipPath="url(#_clip1)">
        <path
          fill="none"
          d="M1536.88 138.184l3.31 363.442H-22.29V232.529S209.434-48.851 504.055 42.184c294.621 91.034 428.69 220.138 660.414 210.207 231.724-9.931 342.621-89.38 372.414-114.207z"
        ></path>
        <clipPath id="_clip2">
          <path d="M1536.88 138.184l3.31 363.442H-22.29V232.529S209.434-48.851 504.055 42.184c294.621 91.034 428.69 220.138 660.414 210.207 231.724-9.931 342.621-89.38 372.414-114.207z"></path>
        </clipPath>
        <g clipPath="url(#_clip2)">
          <path
            fill="#fff"
            fillOpacity="0.59"
            d="M1606.2 41.179L-129.81 16.416l-9.655 676.897 1736.01 24.762 9.655-676.896z"
          ></path>
        </g>
      </g>
    </svg>
    </motion.div>
      
      </motion.div>
    </main>
  );
}
