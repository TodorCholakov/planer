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
    <main className="bg-gradient-to-r from-rose-50 to-rose-300  flex flex-col items-center  ">
      <motion.ul
        className=" pt-4 font-mono  font-bold text-white text-6xl ml-2 mr-2  flex flex-col min-h-[calc(100vh-60px)] justify-end"
        variants={containerIndex}
        initial="hidden"
        animate="show"
      >
        <motion.li className="p-1 last:justify-beteen" variants={titleAnimation}>
          ENJOY
        </motion.li>
        <motion.li className="p-1 last:justify-beteen" variants={titleAnimation}>
          OUR
        </motion.li>
        <motion.li className="p-1 last:justify-beteen" variants={titleAnimation}>
          DIGITAL
        </motion.li>
        <motion.li className="p-1 last:justify-beteen" variants={titleAnimation}>
          CONTENT
        </motion.li>
        <motion.li className="p-1 last:justify-beteen" variants={titleAnimation}>
          FOR
        </motion.li>
        <motion.li className="p-1 last:justify-beteen" variants={titleAnimation}>
          FREE
        </motion.li>
        <motion.li className="p-1 last:justify-beteen" variants={titleAnimation}>
          AWAYS
        </motion.li>
        <motion.li className="p-1 " variants={titleAnimation}>
          WITH
        </motion.li>
        <motion.li className="p-1 " variants={titleAnimation}>
          SMILE 
        </motion.li>
        <motion.li   className="last:absulute b-0" variants={titleAnimation}>
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
        </motion.li>
      </motion.ul>
    </main>
  );
}
