import React from 'react'
import { client } from '@/utils/contentful';
import Link from 'next/link';


import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
export async function getStaticProps(){
    const res = await client.getEntries({content_type: 'images'})
  return {
    props: {images: res.items
    }
  }
}


export default function Contact({images}) {
  console.log (images)
  return (
    <main className="bg-gradient-to-r from-red-50 to-red-200  flex flex-col items-center  ">
     

    <svg
        xmlns="http://www.w3.org/2000/svg"
        fillRule="evenodd"
        strokeLinejoin="round"
        strokeMiterlimit="2"
        clipRule="evenodd"
        viewBox="0 0 1991 69"
        className="max-w-fit -mb-1"
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
  )
}


