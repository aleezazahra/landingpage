"use client";


import Image from "next/image";
import { Pacifico } from "next/font/google";
import { motion } from "framer-motion";

const pacifico = Pacifico({
  weight: "400",
  subsets: ["latin"],
});

export default function Hero() {
  return (
    <section className="bg-[#270c03] min-h-[520px] flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:py-20 w-full">
        <div className=" grid grid-cols-1 md:grid-cols-2 items-center gap-10">
          
    
          {/* Left Content */}
          <div className="order-2 md:order-0">
            <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7 }}
          >
            <h1 className="text-white font-extrabold leading-tight text-5xl md:text-6xl lg:text-7xl">
              We serve the richest <br />
              <span className={`${pacifico.className} text-[#8a4b38]`}>
                Coffee
              </span>{" "}
              in the city
            </h1>
            </motion.div>

            <motion.div
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false }}
                transition={{ duration: 0.7, delay: 0.4 }}
            >
            <button className="mt-8 mb-8 bg-gradient-to-r from-[#844d3d] to-[#4e211d] border border-[#a76453] text-white px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
              Coffee And Code
            </button>
            </motion.div>
          </div>
          

          <motion.div
            initial={{ opacity: 0, scale: 0.5, y: 100 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            transition={{
                duration: 2,
                type: "spring",
                stiffness: 80,
            }}
            viewport={{
                once: false,
                amount: 0.4,
            }}
            >

        
          <div className="relative flex justify-center items-center min-h-[420px]">
            <Image
              src="/coffee2.png"
              alt="Coffee"
              width={430}
              height={430}
              className="w-[300px] sm:w-[350px] md:w-[450px] animate-spin-slow"
            />

            <div className="absolute top-12 left-6 md:left-4 bg-gradient-to-r from-[#844d3d] to-[#4e211d] text-white px-4 py-3 rounded-xl font-semibold">
              Hey Coder
            </div>

            <div className="absolute bottom-12 right-6 md:right-0 bg-gradient-to-r from-[#844d3d] to-[#4e211d] text-white px-4 py-3 rounded-xl font-semibold">
              Best Coffee
            </div>
          </div>
          </motion.div>
        </div>
        
      </div>
    </section>
  );
}