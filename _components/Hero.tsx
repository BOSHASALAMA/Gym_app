"use cache";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import React from "react";

export const Hero = async () => {
  return (
    <div className="relative w-full min-h-screen md:h-screen flex px-4 md:px-20 items-center text-white overflow-hidden">
      <Image
        src="/gym_back.webp"
        alt="Gym background"
        fill
        priority
        quality={60}
        sizes="100vw"
        className="object-cover -z-10"
      />
      
      <div className="relative z-10">
        <h1 className="text-xl md:text-2xl font-extrabold">
          WITH PATRIC POTTER
        </h1>
        <p className="text-3xl md:text-6xl font-extrabold mt-8">
          BUILD PERFECT BODY <br />
          SHAPE FOR GOOD AND <br />
          HEALTHY LIFE
        </p>
        <Button className="mt-8">COURSES</Button>
      </div>
    </div>
  );
};