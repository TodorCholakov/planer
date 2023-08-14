import React from 'react'
import { createClient } from 'contentful'
import {Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";
import Link from 'next/link';
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


export default function Contact({images}) {
  console.log (images)
  return (
    <div>
<div className="gap-1 grid grid-cols-1 sm:grid-cols-3">
      {images.map((item, index) => (
        console.log (item),
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")} className="h-96">
          
          <CardBody className="overflow-visible p-0">
          <Link href="detailes/aa">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt="image"
              className="fit-content object-cover "
              src={item.fields.image.fields.file.url}
            />
               </Link>
          </CardBody>
         
          <CardFooter className="text-small justify-between">
          <Link href="detailes/aa">
            <b>{item.fields.title}</b>
            
            <p className="text-default-500">{item.price}</p>
            </Link>
          </CardFooter>
    
        </Card>
          
      ))}
    </div>
    </div>
  )
}

