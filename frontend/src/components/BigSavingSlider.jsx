import React from "react";
import { Foot_banner1, Foot_banner2, Foot_banner3 } from "../assets/assets";

const Slide = [
  {
    id: 1,
    image: Foot_banner1,
  },
  {
    id: 2,
    image: Foot_banner2,
  },
  {
    id: 3,
    image: Foot_banner3,
  },
];

const BigSavingSlider = () => {
  return (
    <div className="flex flex-col lg:flex-row gap-4 px-4 lg:px-12">
      {/* Left big image - 65% width */}
      <div className="relative w-full lg:w-[65%] rounded-xl overflow-hidden">
        <img
          src={Slide[0].image}
          alt={Slide[0].title}
          className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
      </div>

      {/* Right two stacked images - 35% width */}
      <div className="w-full lg:w-[35%] flex flex-col gap-4">
        {Slide.slice(1).map((item) => (
          <div
            key={item.id}
            className="relative flex-1 rounded-xl overflow-hidden"
          >
            <img
              src={item.image}
              alt={item.title}
              className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>

            {/* Tag */}
          </div>
        ))}
      </div>
    </div>
  );
};

export default BigSavingSlider;
