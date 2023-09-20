"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion";
import { navVariants } from '@/utils/motion';
import { AlignRight } from 'lucide-react';
import { MobileNav } from './MobileNav';

export const NavLinks = [
    {
        label: "Home",
        href: "/"
    },
    {
        label: "Explore",
        href: "#explore"
    },
    {
        label: "About",
        href: "#about"
    },
]

const Navbar = () => {
    return (
        <div className=''>
            <motion.nav
                variants={navVariants}
                initial="hidden"
                whileInView="show"
                className=' w-[100vw] flex items-center justify-between p-[40px]'
            >
                <Link href={"/"} className='text-2xl'>GenMedia</Link>
                <div className='hidden md:flex items-center justify-between gap-8'>
                    {
                        NavLinks.map(({ href, label }) => (
                            <Link key={href} href={href} className='text-lg font-light tracking-wide uppercase'>{label}</Link>
                        ))
                    }
                    {/* <Link href={"/"} className='text-lg font-light tracking-wide uppercase'>Home</Link>
                    <Link href={"#explore"} className='text-lg font-light tracking-wide uppercase'>Explore</Link>
                    <Link href={"#about"} className='text-lg font-light tracking-wide uppercase'>About Us</Link> */}
                </div>
                <div className='hidden md:flex items-center justify-center gap-5'>
                    <Link href={"/"}>
                        <Image src={"/twitter.png"} alt='twitter' width={20} height={20} />
                    </Link>
                    <Link href={"/"}>
                        <Image src={"/linkedin.png"} alt='twitter' width={20} height={20} />
                    </Link>
                    <Link href={"/"}>
                        <Image src={"/instagram.png"} alt='twitter' width={20} height={20} />
                    </Link>
                </div>
                <div className='md:hidden'>
                    {/* <AlignRight size={40} /> */}
                    <MobileNav />
                </div>
            </motion.nav>
        </div >
    )
}

export default Navbar