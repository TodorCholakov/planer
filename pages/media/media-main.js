import React from 'react'
import Link from 'next/link';
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
export default function mediaMain() {
  return (
    <div className='flex flex-col justify-center items-center bg-gradient-to-r from-rose-50 to-rose-300 min-h-[calc(100vh-150px)]'>
    <div className="justify-center gap-2 grid grid-cols-2 sm:grid-cols-3 ">
       <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-fit drop-shadow-xl m-2 hover:scale-105 "
    >
      <img
        alt="Woman listing to music"
        className="object-cover"
        height={250}
        src="/mainImages/media.jpg"
        width={250}
      />
      <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className=" text-white/80 text-tiny">Sounds</p>
        
      </CardFooter>
    </Card>
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-fit m-2"
    >
      <img
        alt="Woman listing to music"
        className="object-cover"
        height={250}
        src="/mainImages/media.jpg"
        width={250}
      />
      <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className=" text-white/80 text-tiny">Sounds</p>
        
      </CardFooter>
    </Card>
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none w-fit m-2"
    >
      <img
        alt="Woman listing to music"
        className="object-cover"
        height={250}
        src="/mainImages/media.jpg"
        width={250}
      />
      <CardFooter className="justify-center before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className=" text-white/80 text-tiny">Sounds</p>
        
      </CardFooter>
    </Card>
    
      </div>
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
      </div>
  )
}
