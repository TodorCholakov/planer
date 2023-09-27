import React, { useEffect, useState } from "react";
import { client } from "@/lib/contentful";
import PhotoAlbum from "react-photo-album";

export async function getStaticProps() {
  const res = await client.getEntries({ content_type: "images" });
  return {
    props: { images: res.items },
  };
}

export default function images({ images }) {
  console.log(images);
  const [imagesArr, setImagesArr] = useState([]);
  let modifiedArray = images.map((item) => {
    return {
      src: item.fields.files[0].fields.file.url,
      title: item.fields.title,
      width: item.fields.files[0].fields.file.details.image.width,
      height: item.fields.files[0].fields.file.details.image.height,
      key: item.fields.slug,
    };
  });
  useEffect(() => {
    setImagesArr(modifiedArray);
  }, [images]);

  let searchedArr = [];

  function Search() {
    let searchValue = document
      .getElementById("ValueSearchField")
      .value.toLowerCase();
    console.log(searchValue);
    searchedArr = modifiedArray.filter((item) =>
      item.title.toLowerCase().includes(searchValue)
    );
    setImagesArr(searchedArr);
  }
  return (
    <div className="text-center bg-gradient-to-r from-white to-slate-50 min-h-[calc(100vh-300px)]">
      <input
        onChange={Search}
        id="ValueSearchField"
        type="text"
        placeholder="Type here"
        className="input input-bordered w-full max-w-xs mt-2 mb-2"
      />
      <br />
      {imagesArr.length > 0 ? (
        <PhotoAlbum layout="columns" padding={0} photos={imagesArr} />
      ) : (
        <div className="flex flex-col justify-center  items-center bg-gradient-to-r from-white to-slate-50 min-h-[calc(100vh-300px)]">
          <p className="font-mono  font-bold text-slate-500 text-3xl pl-2 pr-2  flex flex-col  justify-center">
            There are no images...
          </p>
        </div>
      )}
    </div>
  );
}
