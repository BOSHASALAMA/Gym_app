"use cache";
import { Button } from "@/components/ui/button";
import React from "react";

export const Hero = async () => {
  return (
    <div className='bg-[url("/gym_back.webp")] bg-cover w-full min-h-screen md:h-screen flex px-4 md:px-20 items-center text-white'>
      <div>
        <h1 className="text-xl md:text-2xl font-extrabold">
          WITH PATRIC POTTER
        </h1>
        <p className="text-3xl md:text-6xl font-extrabold mt-8">
          BUILD PERFECT BODY <br />
          SHAPE FOR GOOD AND <br />
          HEALTHY LIFE{" "}
        </p>
        <Button className="mt-8">COURSES</Button>
      </div>
    </div>
  );
};
