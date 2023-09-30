import React, { useEffect, useState } from "react";
import { client } from "@/utils/contentful";
import { useRouter } from "next/router";
import { BiSolidDownload } from "react-icons/bi";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import BottomLine from "../components/BottomLine";

export default function image() {
  const router = useRouter();
  const id = router.query.slug;
  async function fetchEntry(id) {
    console.log(id);
    try {
      const entry = await client.getEntry(id);
      return entry;
    } catch (error) {
      console.error("Error fetching entry:", error);
      return null;
    }
  }

  const [img, setImg] = useState({});
  useEffect(() => {
    // Replace 'YOUR_ENTRY_ID' with the actual ID of the entry you want to fetch

    fetchEntry(id).then((entry) => {
      if (entry) {
        // Logs the entry metadata
        console.log(id);
        setImg(entry);
        console.log(entry.fields.files[1].fields.file.url);
      }
    });
  }, [id]);
  console.log(img);
  return (
    <div className="flex flex-col items-center  bg-gradient-to-r from-white to-gray-100">
      {img.fields ? (
        <Card isFooterBlurred className="col-span-12 sm:col-span-7 m-1 h-full">
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              {img.fields.title}
            </p>
          </CardHeader>
          <img
            alt="Relaxing app background"
            className="z-0 w-full h-full object-cover max-h-[calc(100vh-70px)] max-w-[calc(800px)]"
            src={img.fields.files[1].fields.file.url}
          />
          <CardFooter className="absolute bg-black/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <img
                alt="Breathing app icon"
                className="rounded-full w-10 h-11 bg-black"
                src="/logo.jpg"
              />
              <div className="flex flex-col">
                <p className="text-tiny text-white/60">
                  {img.fields.description}
                </p>
                <p className="text-tiny text-white/60">
                  Image resolution:{" "}
                  {img.fields.files[2].fields.file.details.image.width}/
                  {img.fields.files[2].fields.file.details.image.height}px.
                </p>
              </div>
            </div>
            <button className="btn btn-outline btn-warning">
              Download <BiSolidDownload className="text-fbbf24 text-2xl" />
            </button>
          </CardFooter>
        </Card>
      ) : (
        <span className="loading loading-ring loading-lg"></span>
      )}
      <BottomLine />
    </div>
  );
}
