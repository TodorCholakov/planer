import React from "react";
import { client } from "@/lib/contentful";

import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "images" });
  
  return {
    props: { images: res.items },
  };
}

export default function images({ images }) {
  console.log(images);
  const subarraySize = Math.floor(images.length / 4);
  const slicedArrays = [];
  // Use a loop to slice the original array into four subarrays
  for (let i = 0; i < images.length; i += subarraySize) {
    const subarray = images.slice(i, i + subarraySize);
    slicedArrays.push(subarray);
  }
  console.log(slicedArrays);
  console.log(slicedArrays[0]);
  return (
    <div className="flex flex-wrap  justify-center m-1">
      <div className="lg:basis-1/4 max-w-full md:basis-1/2 sm:">
        {slicedArrays[0].map((item, index) => {
          return (
            <img
              src={item.fields.files[0].fields.file.url}
              className="w-100 align-middle p-1"
            />
          );
        })}
      </div>
      <div className="lg:basis-1/4 max-w-full md:basis-1/2 sm:">
        {slicedArrays[1].map((item, index) => {
          return (
            <img
              src={item.fields.files[0].fields.file.url}
              className="w-100 align-middle p-1"
            />
          );
        })}
      </div>
      <div className="lg:basis-1/4 max-w-full md:basis-1/2 sm:">
        {slicedArrays[2].map((item, index) => {
          return (
            <img
              src={item.fields.files[0].fields.file.url}
              className="w-100 align-middle p-1"
            />
          );
        })}
      </div>
      <div className="lg:basis-1/4 max-w-full md:basis-1/2 sm:">
        {slicedArrays[3].map((item, index) => {
          return (
            <img
              src={item.fields.files[0].fields.file.url}
              className="w-100 align-middle p-1"
            />
          );
        })}
      </div>
    </div>
  );
}
