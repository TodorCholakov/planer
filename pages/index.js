import { createClient } from 'contentful'
import React, { useState } from 'react';
import Link from 'next/link';
import {Button, ButtonGroup} from "@nextui-org/react";
import {Card, CardHeader, CardBody, CardFooter, Image} from "@nextui-org/react";
import Carousel from './components/Carousel';
const list = [
  {
    title: "Orange",
    img: "/images/fruit-1.jpeg",
    price: "$5.50",
  },
  {
    title: "Tangerine",
    img: "/images/fruit-2.jpeg",
    price: "$3.00",
  },
  {
    title: "Raspberry",
    img: "/images/fruit-3.jpeg",
    price: "$10.00",
  },
  {
    title: "Lemon",
    img: "/images/fruit-4.jpeg",
    price: "$5.30",
  },
  {
    title: "Avocado",
    img: "/images/fruit-5.jpeg",
    price: "$15.70",
    
  },
  {
    title: "Lemon 2",
    img: "/images/fruit-6.jpeg",
    price: "$8.00",
  },
  {
    title: "Banana",
    img: "/images/fruit-7.jpeg",
    price: "$7.50",
  },
  {
    title: "Watermelon",
    img: "/images/fruit-8.jpeg",
    price: "$12.20",
  },
];



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
  const [checkout, setCheckout] = useState(false)
  return (
    <main className="dark text-foreground bg-background">
      {checkout ? (<PayPal />): <button onClick={()=>{setCheckout(true)}}>LL</button>}
      
     <Carousel />
     <form action="https://www.paypal.com/donate" method="post" target="_top">
<input type="hidden" name="hosted_button_id" value="YB9AXAT7SE34E" />
<input type="image" src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif" border="0" name="submit" title="PayPal - The safer, easier way to pay online!" alt="Donate with PayPal button" />
<img alt="" border="0" src="https://www.paypal.com/en_BG/i/scr/pixel.gif" width="1" height="1" />
</form>

      <div className="gap-2 grid grid-cols-2 sm:grid-cols-4">
      {list.map((item, index) => (
        
        <Card shadow="sm" key={index} isPressable onPress={() => console.log("item pressed")}>
          
          <CardBody className="overflow-visible p-0">
          <Link href="detailes/aa">
            <Image
              shadow="sm"
              radius="lg"
              width="100%"
              alt={item.title}
              className="w-full object-cover h-[140px]"
              src={item.img}
            />
               </Link>
          </CardBody>
         
          <CardFooter className="text-small justify-between">
          <Link href="detailes/aa">
            <b>{item.title}</b>
           
            <p className="text-default-500">{item.price}</p>
            </Link>
          </CardFooter>
    
        </Card>
          
      ))}
    </div>
    </main>
  )
}
