"use cache";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default async function Training() {
  return (
    <section className="text-white bg-linear-to-r from-black via-red-500/35  to-black">
      <div className="flex md:flex-row flex-col justify-center p-8">
        <div className="flex flex-col md:border-r-2 md:border-b-0 border-b-2 pb-8 border-gray-600 md:pr-8 md:mr-8 ">
          <div>
            <h1 className="text-center my-4">
              <span className="text-red-500 text-2xl">96%</span> client
              satsifaction
            </h1>
            <p className="text-xs text-gray-400 text-center">
              Our Members Love Their Results And Experience
            </p>
          </div>
        </div>
        <div className="flex flex-col md:border-r-2 md:border-b-0 border-b-2 pb-8 border-gray-600 md:pr-8 md:mr-8">
          <div>
            <h1 className="text-center my-4">
              <span className="text-red-500 text-2xl">+5</span> years of
              Experience
            </h1>
            <p className="text-xs text-gray-400 text-center">
              Trust in our proven track record of transforming
            </p>
          </div>
        </div>
        <div className="flex flex-col md:border-r-2 md:border-b-0 border-b-2 pb-8 border-gray-600 md:pr-8 md:mr-8">
          <div>
            <h1 className="text-center my-4">
              <span className="text-red-500 text-2xl">+800</span> Active Members
            </h1>
            <p className="text-xs text-gray-400 text-center">
              Join our thriving fitness community
            </p>
          </div>
        </div>
        <div className="flex flex-col sm:border-b-2 md:border-b-0 pb-8 border-gray-600 ">
          <div>
            <h1 className="text-center my-4">
              <span className="text-red-500 text-2xl">24/7</span> Support
              Available
            </h1>
            <p className="text-xs text-gray-400 text-center">
              Expert assistance whenever you need it
            </p>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 pt-12 ">
        <div className='bg-[url("/train1.webp")] bg-cover bg-center flex flex-col gap-3 items-center justify-center text-white h-80 md:h-120'>
          <h1 className="text-4xl md:text-6xl font-bold">Personal traning</h1>
          <Link href="/personal" prefetch={true}>
            <Button>VIEW COURSES</Button>
          </Link>
        </div>
        <div className='bg-[url("/train2.webp")] bg-cover bg-center flex flex-col gap-3 items-center justify-center text-white h-80 md:h-120'>
          <h1 className="text-4xl md:text-6xl font-bold">Group traning</h1>
          <Link href="/group" prefetch={true}>
            <Button>VIEW COURSES</Button>
          </Link>
        </div>{" "}
      </div>
    </section>
  );
}
