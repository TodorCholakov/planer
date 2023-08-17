import React from 'react'
import { createClient } from 'contentful'
import {Card, CardHeader, CardBody, CardFooter, Image, Button} from "@nextui-org/react";
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
    <div className="flex justify-center  ">
     
<div className="gap-2 grid grid-cols-2 sm:grid-cols-4 w-fit  ">
    
      {images.map((item, index) => (
        console.log (item),

        
  <Card key={item.sys.id} className="py-4 w-fit ">
      <CardHeader className="pb-0 pt-2 px-4 flex-col items-start w-fit">
        <p className="text-tiny uppercase font-bold">Calendar</p>
        <small className="text-default-500">2024, one sheet</small>
        <small className="text-default-500">Available formats: A3+, A3</small>
        <Button radius="sm" className="bg-gradient-to-tr from-violet-500 to-white-500 text-white shadow-lg" size="sm">
      See more
    </Button>
      </CardHeader>
      <CardBody className="overflow-visible py-2 w-fit">
        <Image
          alt="Card background"
          className=" h-full rounded-xl "
          src={item.fields.image.fields.file.url}
          width={270}
        />
      </CardBody>
    </Card>
      ))}
    </div>
    </div>
  )
}

