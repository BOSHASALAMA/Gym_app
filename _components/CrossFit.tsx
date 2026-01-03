"use cache";
import Image from "next/image";
import React from "react";

export const CrossFit = async () => {
  return (
    <>
      <section className="grid grid-cols-1 md:grid-cols-2 py-24 px-4 md:px-14 text-white bg-linear-to-r from-black via-red-500/35  to-black">
        <div>
          <h1 className="text-3xl md:text-5xl font-extrabold mb-10">
            WELCOME TO CROSSFIT
          </h1>
          <h2 className="font-bold">
            CrossFit is a cutting-edge functional fitness system that can help
            everyday men.
          </h2>
          <br />
          <p className="mb-5">
            Success isn’t really that difficult. There is a significant portion
            of the population here in North America, that actually want and need
            success to be hard! For those of you who are serious about having
            more, doing more, giving more and being more.
          </p>
        </div>
        <div className="flex justify-center">
          <Image
            src="/crossfit1.webp"
            width={400}
            height={300}
            className="w-80 h-60 md:w-120 md:h-90"
            alt="crossfit"
          />
        </div>
      </section>
      <div className='py-18 bg-[url("/bg1.webp")] bg-cover bg-center flex flex-col justify-center items-center text-white'>
        <h3 className="md:text-5xl font-extrabold mb-8">CHOOSE YOUR PROGRAM</h3>
        <p className="text-center">
          Our Crossfit experts can help you discover new training techniques and
          exercises that
          <br /> offer a dynamic and efficient full-body workout.
        </p>
      </div>
    </>
  );
};
