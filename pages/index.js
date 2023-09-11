import { createClient } from 'contentful'
import React, { useState } from 'react';
import Link from 'next/link';
import {Card, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import Carousel from './components/Carousel';
import {Switch} from "@nextui-org/react";
import Donate from './components/Donate';


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
    <main className="h-14 bg-gradient-to-r from-amber-100 to-pink-500  flex flex-col items-center min-h-[calc(100vh-60px)]">
     Why 
     to 
     pay 
     for 
     design 
     that 
     we 
     already 
     created
     <img className="mask mask-hexagon-2" src="/images/stock/photo-1567653418876-5bb0e566e1c2.jpg" />

<Donate />

    </main>
  )
}
