"use client"
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { TitleText, TypingText } from './CustomText'
import { motion } from "framer-motion"
import { fadeIn, opacity } from '@/utils/motion'

const Explore = () => {
    return (
        <div id='explore' className='snapper max-w-7xl flex flex-col-reverse md:flex-row items-center p-10 justify-center mx-auto min-h-screen gap-10 md:gap-40'>
            <motion.div
                variants={opacity(0.2)}
                initial="hidden"
                whileInView="show"
            >
                <Image src={"/explore-1.png"} alt={"explore image"} width={654} height={332} />
            </motion.div>
            <div className='flex flex-col gap-10'>
                <div className='flex flex-col gap-2'>
                    {/* <p className='text-slate-400'>| Our Models</p> */}
                    <TypingText className='text-slate-400' text='| Our Models' />
                    <TitleText text='What we have to offer' />
                    {/* <h1 className='font-extrabold text-5xl'>What we<br /> have to offer</h1> */}
                </div>
                <div className='flex gap-10'>
                    <motion.div
                        variants={fadeIn("right", "spring", 1, 1)}
                        initial="hidden"
                        whileInView="show"
                        className='flex flex-col gap-5 border border-slate-500 p-4 rounded-xl'>
                        <h2 className='h-[60px]'>Image Generation</h2>
                        <p className='font-extralight text-sm text-slate-400 h-[150px]'>Generate high quality<br /> images from just basic<br /> text prompts</p>
                        <Link href={"/"} className='text-center px-8 py-1 border-[#65313E] rounded-full border'>Try</Link>
                    </motion.div>
                    <motion.div
                        variants={fadeIn("right", "spring", 1.3, 1)}
                        initial="hidden"
                        whileInView="show"
                        className='flex flex-col gap-5 border-slate-500 border p-4 rounded-xl'>
                        <h2 className='text-xl h-[60px]'>Video Generation</h2>
                        <p className='font-extralight  h-[150px] text-sm text-slate-400'>Not satisfied from just<br /> images, generate high<br />  quality videos as well</p>
                        <Link href={"/"} className=' px-8 py-1 text-sm border-[#65313E] rounded-full border text-center'>Try</Link>
                    </motion.div>
                </div>
            </div>
        </div >
    )
}

export default Explore