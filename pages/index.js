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
        className=" pt-4 font-mono  font-bold text-white text-6xl ml-2 mr-2  flex flex-col min-h-[calc(100vh-60px)] justify-start"
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
        
      </motion.ul>

   
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fillRule="evenodd"
      strokeLinejoin="round"
      strokeMiterlimit="2"
      clipRule="evenodd"
      viewBox="0 0 1991 69"
      className="w-full -mb-1"
    >
      <path fill="none" d="M0 0H1990.73V68.188H0z"></path>
      <clipPath id="_clip1">
        <path d="M0 0H1990.73V68.188H0z"></path>
      </clipPath>
      <g clipPath="url(#_clip1)">
        <path
          fill="none"
          d="M2022.33 33.625l4.327 68.208H-15.723V51.331S287.173-1.476 672.283 15.609c385.111 17.084 560.357 41.314 863.253 39.45 302.896-1.864 447.853-16.774 486.797-21.434z"
        ></path>
        <clipPath id="_clip2">
          <path d="M2022.33 33.625l4.327 68.208H-15.723V51.331S287.173-1.476 672.283 15.609c385.111 17.084 560.357 41.314 863.253 39.45 302.896-1.864 447.853-16.774 486.797-21.434z"></path>
        </clipPath>
        <g clipPath="url(#_clip2)">
          <path
            fill="#fff"
            d="M2112.95-150.384l-2149.8-12.85-12.621 370.78 2149.8 12.851 12.62-370.781z"
          ></path>
        </g>
      </g>
    </svg>
    </main>
  );
}
