import About from "@/components/About";
import Menu from "@/components/Menu"
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";

import Image from "next/image"


export default function Home(){
  return (
    <div className="overflow-x-hidden">
      <Hero />
        <Menu />
      <About />
  
      <Reviews />
      <Footer />

    </div>
  )
}