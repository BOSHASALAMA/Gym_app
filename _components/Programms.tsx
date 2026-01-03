"use cache";
import { Button } from "@/components/ui/button";

export default async function Programms() {
  return (
    <section className="flex flex-col md:flex-row text-white">
      <div className='bg-[url("/class-1.webp")] bg-cover bg-center py-44 px-11 flex flex-col '>
        <h1 className="font-extrabold text-2xl">CROSSFIT LEVEL</h1>
        <p className="my-5">
          Sufferers around the globe will be happy to hear that there are sleep
          apnea remedies.
        </p>
      </div>
      <div className='bg-[url("/class-2.webp")] bg-cover bg-center py-44 px-11 flex flex-col '>
        <h1 className="font-extrabold text-2xl">BOOTCAMP</h1>
        <p className="my-5">
          The oil, also called linseed oil, has many industrial uses – it is an
          important ingredient
        </p>
      </div>
      <div className='bg-[url("/class-3.webp")] bg-cover bg-center py-44 px-11 flex flex-col '>
        <h1 className="font-extrabold text-2xl">ENERGY PLAST</h1>
        <p className="my-5">
          It is a very common occurrence like cold or fever depending upon your
          lifestyle.
        </p>
      </div>
      <div className='bg-[url("/class-4.webp")] bg-cover bg-center py-44 px-11 flex flex-col '>
        <h1 className="font-extrabold text-2xl"> BODY BALANCE</h1>
        <p className="my-5">
          The procedure is usually a preferred alternative to photorefractive
          keratectomy,
        </p>
      </div>
    </section>
  );
}
