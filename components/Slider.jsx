import React, { useState } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import Image from "next/image";
import { SliderData } from "./SliderData";


const Slider = ({ slides }) => {
  const [current, setCurrent] = useState(0);
  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1);
  };

  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1);
  };
  if (!Array.isArray(slides) || slides.length <= 0) {
    return null;
  }
  return (
    <div id="" className="max-2-[1240px] mx-auto">
      <h1 className="text-2xl font-bold text-center p-4"></h1>
      <div className="relative flex justify-center p-4">
        <div>
        <FaArrowCircleLeft
                  onClick={prevSlide}
                  size={50}
                  className="absolute top-[50%] left-[30px] text-black/70 cursor-pointer select-none z-[2] "
                />
          {SliderData.map((slide, index) => {
            return (
              <div
                key={index}
                className={
                  index === current
                    ? "opacity-[1] ease-in duration-1000"
                    : "opacity-0 "
                }
              >
                {" "}
             
                {index === current && (
                  <Image
                    width="1440"
                    height="600"
                    objectFit="cover"
                    src={slide.image}
                    alt="/"
                    className="rounded-3xl"
                    
                  />
                )}
                
              </div>
            );
          })}{" "}
          <FaArrowCircleRight
                  onClick={nextSlide}
                  size={50}
                  className="absolute top-[50%] right-[30px] text-black/70 cursor-pointer select-none z-[2]"
                />
        </div>
      </div>
    </div>
  );
};

export default Slider;
