"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from "framer-motion"
import { fadeIn, opacity, slideIn } from '@/utils/motion'
import { TypingText } from './CustomText'

const Hero = () => {
    return (
        <>
            <div className='max-w-5xl mx-auto flex flex-col gap-10 mb-5 mt-20'>
                <motion.h1
                    variants={fadeIn("up", "spring", 0.5, 2)}
                    initial="hidden"
                    whileInView="show"
                    viewport={{ once: true }}
                    className='text-transparent flex items-center justify-center bg-clip-text bg-gradient-to-b uppercase from-[#FF3BFF] via-[#ECBFBF]  to-[#D94FD5] text-6xl text-center'
                >Unlocking Creative Power</motion.h1>
                {/* <p className='text-sm text-slate-400 max-w-xl text-center mx-auto'>A premier destination for AI-generated images and videos.
                    Experience the future of media production with GenMedia.</p> */}
                <TypingText className='text-sm text-slate-400 max-w-xl text-center mx-auto' text='A premier destination for AI-generated images and videos.
                    Experience the future of media production with GenMedia.' />
                {/* <span className='text-center mt-2'>
                    <Link href={"/"} className='p-5 rounded-full border border-white '> Get Started</Link>
                </span> */}
                {/* <div className=" bg-  bg-gradient-to-r from-green-400 to-blue-500 p-4">
                    <div className="bg-transparent p-4">
                        <span className="inline-block bg-red-500 text-white px-2 py-1 rounded">New</span>
                    </div>
                </div> */}
                <motion.div
                    variants={opacity(2)}
                    initial="hidden"
                    whileInView="show"
                >
                    <Link href={"/"} className="container mx-auto rounded-xl">
                        <div className="box rounded-xl">Get Started</div>
                    </Link>
                </motion.div>
            </div>
            <motion.div
                variants={opacity(2)}
                initial="hidden"
                whileInView="show"
                viewport={{ once: true }}
            >
                <Image src={"/hero.png"} className='mx-auto left-0 h-[450px] w-[1700px]' height={500} width={1680} alt='Hero Image' priority />
            </motion.div>
        </>
    )
}

export default Hero