import About from "@/components/About";
import AppBanner from "@/components/AppBanner"
import Footer from "@components/Footer";
import Hero from "@/components/Hero";
import Reviews from "@/components/Reviews";
import Services from "@/components/Services";
import Image from "next/image"


export default function Home(){
  return (
    <div className="overflow-x-hidden">
      <Hero />
      <Services />
      <About />
      <AppBanner />
      <Reviews />
      <Footer />

    </div>
  )
}