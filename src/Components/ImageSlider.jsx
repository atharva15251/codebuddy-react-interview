import React, { useEffect, useState } from "react";
import data from "./Constants";
import { GiPreviousButton } from "react-icons/gi";
import { GiNextButton } from "react-icons/gi";

const ImageSlider = () => {
  const [activeImageIndex, setActiveImageIndex] = useState(0);

  const handlePrevClick = () => {
    setActiveImageIndex(!activeImageIndex ? data.length - 1 : activeImageIndex - 1);
  };

  const handleNextClick = () => {
    setActiveImageIndex((activeImageIndex + 1) % data.length);
  };

  useEffect(()=>{
    const timerID = setTimeout(()=>{
        handleNextClick();
    }, 3000);
    return () =>{
        clearTimeout(timerID);
    };
  },[activeImageIndex]);



  return (
    <div className="flex justify-center m-10 p-4 font-bold">
      <button className="m-2 p-2 font-bold" onClick={handlePrevClick}>
        <GiPreviousButton />
      </button>
      {data.map((url, index) => (
        <img
          key={url}
          src={url}
          className={
            "h-[100px] w-[300px] object-contain " +
            (activeImageIndex === index ? "block" : "hidden")
          }
          alt="imageslider-wallpaper"
        />
      ))}
      <button className="m-10 p-4 font-bold" onClick={handleNextClick}>
        <GiNextButton />
      </button>
    </div>
  );
};

export default ImageSlider;
