import Image from "next/image";
import React from "react";
import bannerImg from "@/assets/banner.png";

const Banner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 container mx-auto items-center bg-[#222630] rounded-2xl p-5 sm:p-8 md:p-10 mt-8 md:mt-15">
      <div className="space-y-4 ">
        <h4 className="text-[#C2F800]">WORKOUT LIBRARY</h4>
        <h1 className="font-bold text-3xl sm:text-4xl md:text-5xl font-oswald">
          TRAIN WITH INTENT. LOG EVERY SET.
        </h1>
        <p className="text-[#9CA3AF]">
          FitLog is a dark, no-nonsense gym companion: pick a lift, lock it into
          today's plan, and watch the week's work add up.
        </p>
        <button className="btn bg-[#C2F800] text-black">BROWSE WORKOUTS</button>
      </div>
      <div className="flex justify-center ">
        <Image src={bannerImg} alt="banner image" className="w-full max-w-md mx-auto"></Image>
      </div>
    </div>
  );
};

export default Banner;
