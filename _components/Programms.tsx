"use cache";
import Image from "next/image";

export default async function Programms() {
  const programs = [
    {
      image: "/class-1.webp",
      title: "CROSSFIT LEVEL",
      description: "Sufferers around the globe will be happy to hear that there are sleep apnea remedies.",
    },
    {
      image: "/class-2.webp",
      title: "BOOTCAMP",
      description: "The oil, also called linseed oil, has many industrial uses – it is an important ingredient",
    },
    {
      image: "/class-3.webp",
      title: "ENERGY PLAST",
      description: "It is a very common occurrence like cold or fever depending upon your lifestyle.",
    },
    {
      image: "/class-4.webp",
      title: "BODY BALANCE",
      description: "The procedure is usually a preferred alternative to photorefractive keratectomy,",
    },
  ];

  return (
    <section className="flex flex-col md:flex-row text-white">
      {programs.map((program, index) => (
        <div key={index} className="relative py-44 px-11 flex flex-col flex-1 overflow-hidden">
          {/* Background Image */}
          <Image
            src={program.image}
            alt={program.title}
            fill
            loading="lazy"
            quality={75}
            sizes="(max-width: 768px) 100vw, 25vw"
            className="object-cover object-center -z-10"
          />
          
          {/* Dark overlay for better text readability */}
          <div className="absolute inset-0 bg-black/40 -z-10" />
          
          {/* Content */}
          <div className="relative z-10">
            <h1 className="font-extrabold text-2xl">{program.title}</h1>
            <p className="my-5">{program.description}</p>
          </div>
        </div>
      ))}
    </section>
  );
}