import { createClient } from 'contentful'
import React, { useState } from 'react';
import Link from 'next/link';
import {Card, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import Carousel from './components/Carousel';
import {Switch} from "@nextui-org/react";



export async function getStaticProps(){

  const client = createClient({
    space: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN
  })


    const res = await client.getEntries({content_type: 'images'})
  return {
    props: {images: res.items
    }
  }
}

export default function Home({images}) {
  return (
    <main className="bg-background flex flex-col items-center min-h-[calc(100vh-231px)]">
     Why 
     to 
     pay 
     for 
     design 
     that 
     we 
     already 
     created


    </main>
  )
}
