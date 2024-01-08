// eslint-disable-next-line
import React, { useState, useEffect } from "react";
import { BsChevronCompactLeft, BsChevronCompactRight } from "react-icons/bs";

const data = [
  {
    imageUrl: "images/env.jpg",
    title: "Environmental Legal Advisory",
    description:
      "We offer legal advisory in connection with Environmental acts, rules and regulations.",
  },
  {
    imageUrl: "images/stp2.jpg",
    title: "Sewage Treatment Plant",
    description:
      "We offer comprehensive STP services, encompassing the installation of sewage treatment plants",
  },
  {
    imageUrl: "images/stp4.png",
    title: "Water Treatment Plant",
    description:
      "We provide Water Treatment Plant (WTP) services, excelling in the installation, operation, and maintenance of versatile softening plants ",
  },
  {
    imageUrl: "images/etp.jpg",
    title: "Effluent Treatment Plant",
    description:
      "We excel in delivering innovative Effluent Treatment Plants (ETP) for diverse industrial sectors",
  },
];

const Section = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? data.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === data.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    // Automatically slide to the next image every 5 seconds
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    // Clear the interval when the component is unmounted or dependencies change
    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <div className="relative h-screen flex items-center justify-center group duration-500">
      <div className="cursor-pointer hidden group-hover:block ">
        <div className="absolute left-5 z-30 top-[50%] -translate-x-0 -translate-y-[-50%] rounded-full bg-black/20">
          <BsChevronCompactLeft onClick={prevSlide} size={35} fill="white" />
        </div>
        <div className="absolute right-5 z-30 top-[50%] -translate-x-0 -translate-y-[-50%] rounded-full bg-black/20">
          <BsChevronCompactRight size={35} onClick={nextSlide} fill="white" />
        </div>
      </div>
      {data.map((item, index) => (
        <div
          key={index}
          className="absolute inset-0 bg-cover bg-center object-cover z-10"
          style={{
            backgroundImage: `url(${item.imageUrl})`,
            opacity: index === currentIndex ? 1 : 0,
            transition: "opacity 0.5s ease-in-out", // Smooth opacity transition
          }}
        ></div>
      ))}
      <div className="relative z-20 text-white text-center ">
        <h1 className="md:text-[70px] text-[40px] font-bold">
          {data[currentIndex].title}
        </h1>
        <p className="mt-2 font-bold text-white ">
          {data[currentIndex].description}
        </p>
      </div>
    </div>
  );
};

export default Section;
