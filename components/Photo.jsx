"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const Photo = () => {
    return (
        <div className="w-full h-full relative">
            <motion.div 
            initial={{opacity:0}}
            animate={{opacity: 1,
            transition: {delay: 2, 
            duration: 0.4, 
            ease: "easeIn"}}}>
                {/* image */}
                <motion.div
                initial={{opacity:0}}
                animate={{opacity: 1,
                transition: {delay: 2.4, 
                duration: 0.4, 
                ease: "easeInOut"}}} 
                className="w-[220px] h-[220px] xl:w-[390px]
                xl:h-[390px] mix-blend-lighten absolute ml-[40px] xl:ml-[30px]">
                    <Image src="/assets/bolaji.png" priority
                    quality={100}
                    fill
                    alt=""
                    className="object-cover  xl:ml-[29px]"/>
                </motion.div>

                {/* circle */}
                <motion.svg
                className="w-[300px] h-[300px] xl:h-[506px] 
                xl:w-[506px]"
                fill="transparent"
                viewBox="0 0 506 506"
                xmlns="http://www.w3.org/2000/svg"
                >
                    <motion.circle cx="253" cy="253" r="250" 
                    stroke="#87CEEB"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    initial={{strokeDasharray: "24 10 0 0"}}
                    animate={{
                        strokeDasharray: ["15 120 25 25", "16 25 92 72", "4 250 22 22"],
                        rotate: [120, 360]
                    }}
                    transition={{
                        duration: 20,
                        repeat: Infinity,
                        repeatType: "reverse"
                    }}
                    />
                </motion.svg>
            </motion.div>
        </div>
    )
}

export default Photo
