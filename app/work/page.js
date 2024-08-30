
"use client";
import { motion } from "framer-motion";
import React,{useState} from "react";
import { Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import {BsArrowUpRight, BsGithub} from "react-icons/bs";
import { 
    Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger} from "@/components/ui/tooltip";
import Link from "next/link"
import Image from "next/image";
import WorkSliderButtons from "@/components/WorkSliderButtons";


const projects = [
    {
        num: "01",
        category: "frontend",
        title: "Meditechy Africa Site",
        description: "A responsive website for Meditechy Africa, a health-techh startup",
        stack: [
            {
                name: "React.js"
            },
            {
                name: "Tailwind-Css"
            }
        ],
        image:"/assets/work/meditechy.png",
        live: "https://meditechy.vercel.app/",
        github: "https://github.com/emperorbj/meditechy"
    },
    {
        num: "02",
        category: "frontend",
        title: "Christ Mission Site",
        description: "A responsive website for Christ Mission, a missionary organization",
        stack: [
            {
                name: "React.js"
            },
            {
                name: "Tailwind-Css"
            },
            {
                name: "Typescript"
            },

        ],
        image:"/assets/work/missionsite.png",
        live: "https://missionsite.vercel.app/",
        github: "https://github.com/emperorbj/missionsite"
    },
    {
        num: "03",
        category: "frontend",
        title: "Fashion Nation",
        description: "A responsive website for clothe e-commerce",
        stack: [
            {
                name: "Html5"
            },
            {
                name: "Css3"
            },
            {
                name: "Javascript"
            },
        ],
        image:"/assets/work/ecommerce.png",
        live: "https://e-commerce-af44f.web.app",
        github: "https://github.com/emperorbj/E-commerce-site"
    },
    {
        num: "04",
        category: "frontend",
        title: "Gemini AI Clone",
        description: "A responsive AI clone",
        stack: [
            {
                name: "React.js"
            },
            {
                name: "Tailwind-Css"
            },

        ],
        image:"/assets/work/ai.jpg",
        live: "https://tube-alpha.vercel.app/",
        github: "https://github.com/emperorbj/tube"
    },
    {
        num: "05",
        category: "frontend",
        title: "Movie Search App",
        description: "A responsive website for searching latest movies,animation and series",
        stack: [
            {
                name: "Javascript"
            },
            {
                name: "Css3"
            },
            {
                name: "Html5"
            }
        ],
        image:"/assets/work/alien.jpg",
        live: "https://moviepedia-kohl.vercel.app",
        github: "https://github.com/emperorbj/moviepedia"
    },
    {
        num: "06",
        category: "frontend",
        title: "Expense Tracker App",
        description: "A simple app for tracking expenses",
        stack: [
            {
                name: "React.js"
            },
            {
                name: "Tailwind-Css"
            }
        ],
        image:"/assets/work/expenseTracker.jpg",
        live: "https://expensetrack-two.vercel.app",
        github: "https://github.com/emperorbj/expensetrack"
    },
    {
        num: "07",
        category: "frontend",
        title: "Old Portfolio Site",
        description: "My first portfolio site",
        stack: [
            {
                name: "Html5"
            },
            {
                name: "Css3"
            },
            {
                name: "Javascript"
            }
        ],
        image:"/assets/work/oldportfolio.png",
        live: "https://portfolio-sigma-ten-60.vercel.app/",
        github: "https://github.com/emperorbj/mysite"
    },
    {
        num: "08",
        category: "backtend",
        title: "Tim Super store API",
        description: "A simple API for Tim super store",
        stack: [
            {
                name: "Node.js"
            },
            {
                name: "MongoDB"
            }
        ],
        image:"/assets/work/thumb3.png",
        live: "",
        github: ""
    },
    {
        num: "07",
        category: "backtend",
        title: "Tim Super store API",
        description: "A simple API for Tim super store",
        stack: [
            {
                name: "Node.js"
            },
            {
                name: "MongoDB"
            }
        ],
        image:"/assets/work/thumb3.png",
        live: "",
        github: ""
    }
]
const Work = () => {
    const [project, setProject] = useState(projects[0])

    const handleSlideChange = (swiper) =>{
        // get current slide index
        const currentIndex = swiper.activeIndex;
        // update project state  based on current slide index
        setProject(projects[currentIndex]);
    }
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {duration: 2.4, delay: 0.4, ease: "easeIn"}

        }}
        className="min-h-[80vh] flex flex-col justify-center py-12 xl:px-0">
        <div className="container mx-auto">
            <div className="flex flex-col xl:flex-row xl:gap-[30px]">
                <div className="w-full xl:w-[50%] xl:h-[460px] flex 
                flex-col xl:justify-between order-2 xl:order-none ">
                    <div className="flex flex-col gap-[30px] h-[50%]">
                        {/* outline num */}
                        <div className="text-6xl text-white leading-none font-extrabold
                        text-transparent">
                            {project.num}
                        </div>
                        {/* project category */}
                        <h2 className="text-[42px] font-bold leading-none
                        text-white group-hover:text-sky-400 transition-all
                        duration-500 capitalize">{project.category}{" "}project</h2>

                        {/* project description */}
                        <p className="text-white/60">{project.description}</p>
                        {/* project stack */}
                        <ul className="flex gap-4">
                            {project.stack.map((item,index)=>{
                                return <li key={index} className="text-sky-400">{item.name}</li>
                            })}
                        </ul>
                        {/* border */}
                        <div className="border border-white/20"></div>
                        {/* buttons */}
                        <div className="flex items-center gap-4">
                            {/* live project button */}
                            <Link href={project.live}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full
                                        bg-white/5 flex justify-center items-center group">
                                            <BsArrowUpRight className="text-white text-2xl group-hover:text-sky-400"/>
                                        </TooltipTrigger>

                                        <TooltipContent>
                                            <p>live project</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                            {/* project github link */}
                            <Link href={project.github}>
                                <TooltipProvider delayDuration={100}>
                                    <Tooltip>
                                        <TooltipTrigger className="w-[50px] h-[50px] rounded-full
                                        bg-white/5 flex justify-center items-center group">
                                            <BsGithub className="text-white text-2xl group-hover:text-sky-400"/>
                                        </TooltipTrigger>

                                        <TooltipContent>
                                            <p>Github repository</p>
                                        </TooltipContent>
                                    </Tooltip>
                                </TooltipProvider>
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="w-full xl:w-[50%]">
                    <Swiper 
                    spaceBetween={30}
                    slidesPerView={1}
                    className="xl:h-[520px] mb-12"
                    onSlideChange={handleSlideChange}>
                        {projects.map((project,index)=>{

                            return <SwiperSlide className="w-full" key={index}>
                                <div className="h-[460px] relative group flex 
                                justify-center
                                items-center bg-pink-50/20 rounded-[10px]">
                                    {/* overlay */}
                                    <div className="absolute top-0 bottom-0 w-full
                                    h-full bg-black/10 z-10 rounded-[10px]"></div>
                                    {/* image */}
                                    <div className="relative w-full h-full rounded-[10px]">
                                        <Image src={project.image}
                                        fill
                                        className="object-cover rounded-[10px]"
                                        alt=""/>
                                    </div>
                                </div>
                            </SwiperSlide>
                        })}
                        {/* slide buttons */}
                        <WorkSliderButtons
                        iconStyles="text-slate-800" 
                        containerStyles="flex gap-2 absolute
                        right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full 
                        justify-between xl:w-max xl:justify-none"
                        />
                    </Swiper>
                </div>
            </div>
        </div>
        </motion.div>

    )
}

export default Work
