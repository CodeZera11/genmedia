"use client";

import Image from 'next/image';
import React from 'react';
import { motion } from "framer-motion";
import { fadeIn } from '@/utils/motion';
import { TitleText, TypingText } from './CustomText';

const About = () => {
    return (
        <div id='about' className='max-w-7xl flex items-center justify-center mx-auto min-h-screen gap-40'>
            <motion.div
                variants={fadeIn("right", "tween", 0.5, 0.5)}
                initial="hidden"
                whileInView="show"
            >
                <Image src={"/about-1.png"} alt={"explore image"} width={500} height={500} />
            </motion.div>
            <div className='flex flex-col gap-10 p-10'>
                <div className='flex flex-col gap-2'>
                    {/* <p className='text-slate-400'>| A little about GenMedia</p> */}
                    <TypingText className='' text='| A little about GenMedia' />
                    {/* <h1 className='font-extrabold text-5xl'>About Us</h1> */}
                    <TitleText text='About Us' />
                </div>
                <motion.div
                    variants={fadeIn("left", "tween", 1.2, 1)}
                    initial="hidden"
                    whileInView="show"
                    className='max-w-xl text-[24px]'>
                    Welcome to GenMedia, where we harness the limitless potential of artificial intelligence to<br /> revolutionize image and video generation.
                    <br />
                    <br />
                    Unlock boundless creativity with GenMedia - your premier destination for AI-generated images and videos.
                    <br />
                    <br />
                    Tap into the extraordinary capabilities of our innovative technology to create stunning visuals that push the limits of imagination. Experience the future of media production with GenMedia.
                </motion.div>
            </div>
        </div>
    )
}

export default About