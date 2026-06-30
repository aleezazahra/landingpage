"use client";

import { Pacifico } from "next/font/google";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className="bg-[#270c03] min-h-[520px] flex items-center">
      <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 w-full">
        <div className="max-w-2xl text-center md:text-left mx-auto md:mx-0">
          <span className="inline-block  border border-[#9a503e] text-white/90 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            Now open downtown
          </span>

          <h1 className="text-white font-extrabold leading-tight text-3xl sm:text-4xl md:text-6xl">
            We serve the richest{" "}
            <span className={`${pacifico.className} text-[#a76453]`}>
              Coffee
            </span>{" "}
            in the city
          </h1>

          <p className="text-white/60 text-base md:text-lg mt-6 max-w-md mx-auto md:mx-0">
            Small batch beans, roasted weekly, and a couch you won't want
            to leave. Come say hi.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mt-8 justify-center md:justify-start">
            <button className=" border border-white/20 text-white px-6 py-2.5 rounded-full font-semibold hover:border-white/40 transition-colors">
              Order Now
            </button>
            <button className="text-white/80 px-6 py-2.5 rounded-full font-semibold border border-white/20 hover:border-white/40 hover:text-white transition-colors">
              View Menu
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}