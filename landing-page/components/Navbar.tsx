"use client";
import Link from "next/Link"
import { FaCoffee } from "react-icons/fa";
import { Pacifico } from "next/font/google";
import Image from "next/google"
import {motion} from "framer-motion"


const pacifico=Pacifico({
    weight:"400",
    subsets:["latin"],
})

export default function Navbar(){
    return(
        <header className="bg-gradient-to-r from-[#4a1e1b] to-[#5b3430]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="h-20 flex items-center justify-between">
                    <motion.div
                    initial={{opacity:0,y:-40}}
                    whileInView={{opacity:1,y:0}}
                    viewport={{once:false}}
                    transition={{duration:0.7}}
                    
                    >
                        <Link href="/" className="flex items-center gap-3">
                        <Image src="/coffe_logo.png" alt="logo" width={56} height={56} className="w-12 h-12 md:w-14 md:h-14"/>
                        <h1
                        className={`${pacifico.className} text-white text-2xl md:text-3xl`}>
                            Coffee
                        </h1>
                        

                        
                        </Link>

                        <motion.nav
                        initial={{opacity:0,y:-40}}
                        whileInView={{opacity:1,y:0}}
                        viewport={{once:false}}
                        transition={{duration:0.7,delay:0.2}}
                        className="hidden md:flex items-center gap-12"
                        
                       
                        >
                             <Link href="/" className="text-white/70 hover:text-white text-[20px] font-medium transition">
                             Home</Link>

                             <Link href="#services" className="text-white/70 hover:text-white text-[20px] font-medium transition">
                             Services</Link>

                             <Link href="#about" className="text-white/70 hover:text-white text-[20px] font-medium transition">
                             About</Link>

                             <button className="bg-[#784539] hover:scale-105 transition-all duration-300 px-4 py-2 rounded-full flex items-center gap-3 
                             text-white text-xl font-semibold">
                                Order
                                <FaCoffee />
                             </button>

                              


                        </motion.nav>

                        <motion.div
                            initial={{ opacity: 0, y: -40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="md:hidden flex items-center"
                        
                        
                        >
                            <button className="bg-[#784539] hover:scale-105 transition-all duration-300 px-4 py-2 rounded-full flex items-center gap-3 text-white text-xl font-semibold">
                                Order
                                <FaCoffee />

                            </button>

                        </motion.div>
                        

                        

                    </motion.div>

                </div>

            </div>

        </header>
    )
}