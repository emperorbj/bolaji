"use client"

import { BsArrowDownRight } from "react-icons/bs";
import Link from "next/link";
import { motion } from "framer-motion";

const services = [
    {
        num: "01",
        title: "Web Development",
        description: "We build fast, scalable, and secure web applications using the latest technologies.",
        href: ""
    },
    {
        num: "02",
        title: "AI Automation",
        description: "We build AI powered automation systems enhance business workflows and automate tasks",
        href: ""
    },
    {
        num: "03",
        title: "AI Chatbot",
        description: "We build AI powered chatbot to enhance business workflows",
        href: ""
    },
    {
        num: "04",
        title: "Training",
        description: "We train aspiring software developers with the latest technologies",
        href: ""
    }
]
const Services = () => {
    return (
        <section className="min-h-[80vh] flex flex-col justify-center
            py-12 xl:py-0  ">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{
                        opacity: 1,
                        transition: { duration: 2.4, delay: 0.4, ease: "easeIn" }

                    }}
                    className="grid grid-cols-1 md:grid-cols-2 gap-[60px]">
                    {services.map((service, index) => {
                        return (
                            <div key={index}
                                className="flex-1 flex flex-col justify-center
                                gap-6 group">
                                {/* top */}
                                <div className="w-full flex justify-between
                                    items-center">
                                    <div className="text-4xl font-extrabold
                                        text-outline text-transparent
                                        group-hover:text-outline-hover transition-all duration-500">
                                            {service.num}
                                    </div>
                                    <Link href={service.href}
                                        className="w-[60px] h-[60px] rounded-full bg-white
                                        group-hover:bg-sky-400 transition-all
                                        duration-500 flex justify-center
                                        items-center hover:-rotate-45">
                                        <BsArrowDownRight className="text-slate-800 text-3xl" />
                                    </Link>
                                </div>
                                {/* heading */}
                                <h2 className="text-[42px] font-bold leading-none 
                                text-white group-hover:text-sky-400 
                                transition-all duration-500">{service.title}</h2>
                                {/* description */}
                                <p>{service.description}</p>
                                <div className="border-b border-white/20 w-full"></div>
                            </div>
                        )
                    })}
                </motion.div>
            </div>
        </section>
    )
}

export default Services

