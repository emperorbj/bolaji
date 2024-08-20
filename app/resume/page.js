"use client";

import { FaHtml5,
    FaCss3,
    FaJs,
    FaReact,
    FaNodeJs,
    FaPython,
    FaGithub
} from "react-icons/fa";

import { 
    SiTailwindcss,
    SiMongodb,
    SiExpress,
    SiNextdotjs

} from "react-icons/si";

import { 
    Tabs, 
    TabsContent, 
    TabsTrigger, 
    TabsList } from "@/components/ui/tabs";

import { 
    Tooltip, 
    TooltipContent, 
    TooltipProvider, 
    TooltipTrigger} from "@/components/ui/tooltip";

import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";
const about = {
    title: "About Me",
    description: "As a dedicated full-stack developer, I specialize in creating user-centric web applications that deliver seamless digital experiences. My expertise spans both front-end and back-end technologies, with a robust skill set that includes React, Next.js, Node.js, Express, MongoDB, and TypeScript. I excel in version control using Git and have hands-on experience with Google Cloud technologies and chatbot development.",

    info: [
        {
            fieldName: "Name",
            fieldValue: "Opatola Bolaji"
        },
        {
            fieldName: "Phone Number",
            fieldValue: "(+234) 906 411 0776"
        },
        {
            fieldName: "Email",
            fieldValue: "cwaku96@gmail.com"
        },
        {
            fieldName: "Experience",
            fieldValue: "5+ Years"
        },
        {
            fieldName: "Nationality",
            fieldValue: "Nigerian"
        },
        {
            fieldName: "Freelance",
            fieldValue: "Available"
        },
    ]
}

const experience = {
    icon: "/assets/resume/badge.svg",
    title: "Experience",
    description: "I have a strong background in software development with over 5 years of experience in building full-stack applications",
    items: [
        {
            company: "Meditechy Africa",
            position: "Front End Developer",
            duration: "2023-present"
        },
        {
            company: "Alot Academy",
            position: "Full-Stack Developer",
            duration: "2024-present"
        },
        {
            company: "Alot Academy",
            position: "Full-Stack Developer",
            duration: "2024-present"
        },
        {
            company: "Alot Academy",
            position: "Full-Stack Developer",
            duration: "2024-present"
        },
        {
            company: "Alot Academy",
            position: "Full-Stack Developer",
            duration: "2024-present"
        },
    ]
}

const education = {
    icon: "/assets/resume/cap.svg",
    title: "Educational Background",
    items: [
        {
            institution: "Google Cloud Academy",
            degree: "Google Cloud For Developers Course",
            duration: "2024"
        },
        {
            institution: "Udemy",
            degree: "Front End Developer Course",
            duration: "2023"
        },
        {
            institution: "100 Devs Academy",
            degree: "Full-Stack Developer",
            duration: "2023"
        },
        {
            institution: "University Of Ibadan",
            degree: "Bsc Chemistry",
            duration: "2020"
        }
    
    ]
}

const skills = {
    title: "My Skills",
    description: "I have a strong background in software development with over 5 years of experience in building full-stack applications",
    skillList: [
        {
            icon: <FaHtml5/>,
            name: "Html5",
        },
        {
            icon: <FaCss3/>,
            name: "css3"
        },
        {
            icon: <FaJs/>,
            name: "Javascript",
        },
        {
            icon: <FaReact/>,
            name: "React",
        },
        {
            icon: <FaGithub/>,
            name: "Version control",
        },
        {
            icon: <FaNodeJs/>,
            name: "NodeJs",
        },
        {
            icon: <FaPython/>,
            name: "Python",
        },
        {
            icon: <SiExpress/>,
            name: "ExpressJS",
        },
        {
            icon: <SiMongodb/>,
            name: "MongoDB",
        },
        {
            icon: <SiNextdotjs/>,
            name: "NextJS",
        },
        {
            icon: <SiTailwindcss/>,
            name: "Tailwindcss",
        },
    ]
}
const Resume = () => {
    return (
        <motion.div
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {duration: 2.4, delay: 0.4, ease: "easeIn"}

        }}
        className="min-h-[80vh] flex items-center
        justify-center py-12 xl:py-0"
        >
        <div className="container mx-auto">
            <Tabs defaultValue="experience" className="flex flex-col xl:flex-row
            gap-[60px]">
                <TabsList className="flex flex-col w-full max-w-[380px]
                mx-auto xl:mx-0 gap-6">
                    <TabsTrigger value="experience">Experience</TabsTrigger>
                    <TabsTrigger value="education">Education</TabsTrigger>
                    <TabsTrigger value="skills">Skills</TabsTrigger>
                    <TabsTrigger value="about me">About me</TabsTrigger>
                </TabsList>
                {/* tab contents */}
                <div className="min-h-[70vh] w-full">
                    {/* experience */}
                    <TabsContent className="w-full" value="experience" >
                        <div className="flex flex-col gap-[30px]
                        text-center xl:text-left">
                            <h3 className="text-4xl font-bold">{experience.title}</h3>
                            <p className="max-w-[600px] 
                            text-white/60 
                            mx-auto 
                            xl:mx-0">{experience.description}</p>
                            <ScrollArea className="h-[400px]">
                                <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                                    {experience.items.map((items,index)=>{
                                        return (
                                            <li key={index} className="bg-[#232329] py-6 px-10 rounded-xl flex flex-col 
                                            justify-center items-center 
                                            lg:items-start gap-1">
                                                <span className="text-sky-400">{items.duration}</span>
                                                <h3 className="text-xl max-w-[260px] min-h-[60px]
                                                text-center lg:text-left">{items.position}</h3>
                                                <div className="flex items-center gap-3">
                                                    {/* dot */}
                                                    <span className="w-[6px] h-[6px] rounded-full
                                                    bg-sky-400"></span>
                                                    <p className="text-white/60">{items.company}</p>
                                                </div>
                                            </li>
                                        )
                                    })}
                                </ul>
                            </ScrollArea>
                        </div>
                    </TabsContent>
                    {/* education */}
                    <TabsContent className="w-full" value="education">
                        education
                    </TabsContent>
                    {/* skills */}
                    <TabsContent className="w-full" value="skills" >
                        skills
                    </TabsContent>
                    {/* about me */}
                    <TabsContent className="w-full" value="about" >
                        about me
                    </TabsContent>
                </div>
            </Tabs>
        </div>
        </motion.div>
    )
}

export default Resume
