import { Hero } from "@/_components/Hero";
import dynamic from "next/dynamic";

const Training = dynamic(() => import("@/_components/Training"));
const Offers = dynamic(() => import("@/_components/Offers"));
const Programms = dynamic(() => import("@/_components/Programms"));
const Pricing = dynamic(() => import("@/_components/Pricing"));
const CrossFit = dynamic(() => import("@/_components/CrossFit"));
const Exercises = dynamic(() => import("@/_components/Exercises"));
const Classtime = dynamic(() => import("@/_components/Classtime"));
const Contact = dynamic(() => import("@/_components/Contact"));

export default function Home() {
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Training />
      <Offers />
      <CrossFit />
      <Programms />
      <Classtime />
      <Exercises />
      <Pricing />
      <Contact />
    </div>
  );
}
