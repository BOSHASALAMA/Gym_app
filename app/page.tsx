import Classtime from "@/_components/Classtime";
import Contact from "@/_components/Contact";
import { CrossFit } from "@/_components/CrossFit";
import Exercises from "@/_components/Exercises";
import { Hero } from "@/_components/Hero";
import { Offers } from "@/_components/Offers";
import { Pricing } from "@/_components/Pricing";
import { Programms } from "@/_components/Programms";
import { Training } from "@/_components/Training";
import Image from "next/image";

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Training />
      <Offers />
      <CrossFit />
      <Programms/>
      <Classtime/>
      <Exercises/>
      <Pricing />
      <Contact />
    </div>
  );
}
