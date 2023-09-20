import React from 'react'
import { motion } from 'framer-motion'
import { textContainer, textVariant, textVariant2 } from '@/utils/motion'

export const TypingText = ({ text, className }: { text: string, className: string }) => {
    return (
        <motion.p
            variants={textContainer}
            initial="hidden"
            whileInView="show"
            className={`font-normal text-slate-400 text-[14px] ${className}`}
        >
            {
                Array.from(text).map((letter, index) => (
                    <motion.span
                        key={index}
                        variants={textVariant}
                    >
                        {letter}
                    </motion.span>
                ))
            }
        </motion.p>
    )
}

export const TitleText = ({ text }: { text: string }) => {
    return (
        <motion.h2
            variants={textVariant2}
            initial="hidden"
            whileInView="show"
            className='font-extrabold text-5xl'
            viewport={{ once: true }}
        >
            {text}
        </motion.h2>
    )
}