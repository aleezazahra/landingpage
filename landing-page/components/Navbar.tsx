"use client";

import Link from "next/link";
import { useState } from "react";
import { FaCoffee, FaBars, FaTimes } from "react-icons/fa";
import { Pacifico } from "next/font/google";
import Image from "next/image";

const pacifico = Pacifico({
    weight: "400",
    subsets: ["latin"],
});

const links = [
    { href: "/", label: "Home" },
    { href: "#menu", label: "Menu" },
    { href: "#about", label: "About" },
];

export default function Navbar() {
    const [open, setOpen] = useState(false);

    return (
        <header className="bg-[#3d1c19]">
            <div className="max-w-7xl mx-auto px-6">
                <div className="h-20 flex items-center justify-between">
                    <Link href="/" className="flex items-center gap-3">
                        <Image
                            src="/coffe_logo.png"
                            alt="logo"
                            width={56}
                            height={56}
                            className="w-12 h-12 md:w-14 md:h-14"
                        />
                        <span className={`${pacifico.className} text-white text-2xl md:text-3xl`}>
                            Coffee
                        </span>
                    </Link>

                    <nav className="hidden md:flex items-center gap-10">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                className="text-white/70 hover:text-white text-lg font-medium transition-colors"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button className="bg-[#784539] hover:bg-[#8a5246] transition-colors px-5 py-2 rounded-full flex items-center gap-2 text-white text-lg font-semibold">
                            Order
                            <FaCoffee />
                        </button>
                    </nav>

                    <button
                        className="md:hidden text-white text-2xl"
                        onClick={() => setOpen(!open)}
                        aria-label="Toggle menu"
                    >
                        {open ? <FaTimes /> : <FaBars />}
                    </button>
                </div>

                {open && (
                    <nav className="md:hidden flex flex-col gap-4 pb-6">
                        {links.map((link) => (
                            <Link
                                key={link.href}
                                href={link.href}
                                onClick={() => setOpen(false)}
                                className="text-white/70 hover:text-white text-lg font-medium"
                            >
                                {link.label}
                            </Link>
                        ))}
                        <button className="bg-[#784539] px-5 py-2 rounded-full flex items-center justify-center gap-2 text-white text-lg font-semibold w-fit">
                            Order
                            <FaCoffee />
                        </button>
                    </nav>
                )}
            </div>
        </header>
    );
}