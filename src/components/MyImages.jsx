import React, { useEffect, useState } from "react";

const YourComponent = ({ imgs = [{ imgs: "" }], thumbnail }) => {
  const [selectedImage, setSelectedImage] = useState("");

  useEffect(() => {
    setSelectedImage(thumbnail);
  }, [thumbnail]);

  return (
    <div>
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-2">
        <div className="flex flex-col md:flex-row -mx-4">
          <div className="md:flex-1 px-4">
            <div>
              <div className="h-full md:h-full rounded-lg bg-gray-100 mb-4">
                <div className="h-full md:h-full rounded-lg bg-gray-100 mb-4 flex items-center justify-center">
                  <img
                    src={selectedImage}
                    alt=""
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>

              <div className="flex -mx-2 mb-4 ">
                {imgs.map((image, index) => (
                  <div key={index} className="flex-1 px-2">
                    <img
                      src={image}
                      onClick={() => setSelectedImage(image)}
                      alt=""
                      className="w-full rounded-lg h-12 md:h-20 sm:h-44 bg-gray-100 flex items-center justify-center object-cover"
                    />
                  </div>
                ))}

                {/* {imgs.map((image, index) => (
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
          ))} */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YourComponent;
