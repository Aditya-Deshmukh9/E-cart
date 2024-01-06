import React, { useEffect, useState } from "react";

function MyImages({ imgs = [{ imgs: "" }], thumbnail }) {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    setSelectedImage(thumbnail);
  }, [thumbnail]);

  return (
    <>
      <div className="sticky top-0 z-50 overflow-hidden">
        <div className="relative mb-6 lg:mb-10 lg:h-2/4">
          <img
            src={selectedImage}
            alt=""
            className="object-cover w-full lg:h-full"
          />
        </div>
        <div className="flex-wrap hidden md:flex">
          {imgs.map((image, index) => (
            <div className="w-1/2 p-2 sm:w-1/4" key={index}>
              <a className="block border border-blue-300 hover:border-blue-300">
                <img
                  src={image}
                  onClick={() => setSelectedImage(image)}
                  alt=""
                  className="object-cover w-full lg:h-20"
                />
              </a>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}

export default MyImages;
