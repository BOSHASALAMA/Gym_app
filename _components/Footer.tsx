"use client";
import { Dumbbell } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";

const Footer = () => {
  return (
    <footer className="bg-black py-12 px-4 sm:px-6 lg:px-8">
      <div className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none mb-10 size-140 bg-red-500/35 rounded-full blur-[200px]"></div>

      <div className="w-full max-w-7xl mx-auto">
        <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">
          <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
            <Link
              href="/"
              prefetch={true}
              className="text-3xl font-bold flex gap-2 items-center text-red-500"
            >
              <Dumbbell className="text-white w-8 h-8" />
              FITNESS
            </Link>

            <div className="w-full max-w-52 h-px mt-8 bg-linear-to-r from-black via-white/25 to-black"></div>
            <p className="text-sm text-white/60 mt-6 max-w-sm leading-relaxed">
              BUILD PERFECT BODY SHAPE
              <br /> FOR GOOD AND HEALTHY LIFE
            </p>
          </div>

          <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm text-white font-medium">Important Links</h3>
            <div className="flex flex-col gap-2 mt-6 ">
              <Link
                className="text-sm text-white/60 hover:text-white transition-colors"
                href="/"
                prefetch={true}
              >
                Home
              </Link>
              <Link
                className="text-sm text-white/60 hover:text-white transition-colors"
                href="#"
                prefetch={true}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("about")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                About
              </Link>
              <Link
                className="text-sm text-white/60 hover:text-white transition-colors"
                href="#"
                prefetch={true}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("pricing")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Pricing
              </Link>
              <Link
                className="text-sm text-white/60 hover:text-white transition-colors"
                href="#"
                prefetch={true}
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById("contact")?.scrollIntoView({
                    behavior: "smooth",
                  });
                }}
              >
                Contact
              </Link>
            </div>
          </div>

          <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm text-white font-medium">Social Links</h3>
            <div className="flex flex-col gap-2 mt-6">
              <Link
                href="#"
                prefetch={true}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Facebook
              </Link>
              <Link
                href="#"
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Instagram
              </Link>
              <Link
                href="#"
                prefetch={true}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Youtube
              </Link>
              <Link
                href="#"
                prefetch={true}
                className="text-sm text-white/60 hover:text-white transition-colors"
              >
                Whatsapp
              </Link>
            </div>
          </div>

          <div className="w-full md:w-[45%] lg:w-[25%] flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="text-sm text-white font-medium">
              Subscribe for news
            </h3>
            <div className="flex items-center border gap-2 border-white/20 h-13 max-w-80 w-full rounded-full overflow-hidden mt-4">
              <input
                type="email"
                placeholder="Enter your email.."
                className="w-full h-full pl-6 outline-none text-sm bg-transparent text-white placeholder-white/60 placeholder:text-xs"
                required
              />
              <Button
                type="submit"
                className="active:scale-95 transition h-10 rounded-full text-white cursor-pointer mr-1.5"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </div>

        <div className="w-full h-px mt-16 mb-4 bg-linear-to-r from-black via-white/25 to-black"></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-white/60">© 2025 Fitness</p>
          <div className="flex items-center gap-6">
            <a
              href="#"
              className="text-xs text-white/60 hover:text-white transition-colors"
            >
              Terms & Conditions
            </a>
            <div className="w-px h-4 bg-white/20"></div>
            <Link
              href="#"
              prefetch={true}
              className="text-xs text-white/60 hover:text-white transition-colors"
            >
              Privacy Policy
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
