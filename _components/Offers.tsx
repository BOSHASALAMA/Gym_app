"use cache";
import { HoverEffect } from "@/components/ui/card-hover-effect";

export default async function Offers() {
  return (
    <section
      className="py-8 bg-linear-to-r from-black via-red-500/35  to-black"
      id="about"
    >
      <h1 className="text-white text-center text-4xl md:text-6xl font-extrabold">
        WHAT WE OFFER
      </h1>
      <div className="max-w-5xl mx-auto px-8">
        <HoverEffect items={projects} />
      </div>
    </section>
  );
}

export const projects = [
  {
    title: "BODY BUILDING",
    description:
      "You’ll look at graphs and charts in Task One, how to approach the task",
    img: 'bg-[url("/offer1.webp")] bg-cover bg-center',
  },
  {
    title: "MUSCLE GAIN",
    description:
      "You’ll look at graphs and charts in Task One, how to approach the task",
    img: 'bg-[url("/offer2.webp")] bg-cover bg-center',
  },
  {
    title: "WEIGHT LOSS",
    description:
      "You’ll look at graphs and charts in Task One, how to approach the task",
    img: 'bg-[url("/offer3.webp")] bg-cover bg-center',
  },
];
