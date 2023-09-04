import { createClient } from 'contentful'
import React, { useState } from 'react';
import Link from 'next/link';
import {Card, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
import Carousel from './components/Carousel';



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
    <main className="bg-background flex flex-col items-center ">
    <Card
      isFooterBlurred
      radius="lg"
      className="border-none"
    >
      <Image
        alt="Woman listing to music"
        className="object-cover"
        height={200}
        src="1.jpg"
        width={200}
      />
      <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
        <p className="text-tiny text-white/80">Available soon.</p>
        <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
          Notify me
        </Button>
      </CardFooter>
    </Card>
    </main>
  )
}
