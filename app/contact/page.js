"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
Select,
SelectContent,
SelectGroup,
SelectItem,
SelectLabel,SelectTrigger,SelectValue } from "@/components/ui/select";

import {FaPhoneAlt,FaEnvelope,FaMapMarkedAlt}from "react-icons/fa";

const info = [
    {
        icon: <FaPhoneAlt/>,
        title: "Phone",
        description: "(+234) 905 411 0776"
    },
    {
        icon: <FaEnvelope/>,
        title: "Email",
        description: "cwaku96@gmail.com"
    },
    {
        icon: <FaMapMarkedAlt/>,
        title: "Address",
        description: "Osun State,Osogbo,Nigeria"
    }
]
import { motion } from "framer-motion";
const Contact = () => {
    return (
        <motion.section
        initial={{opacity: 0}}
        animate={{
            opacity: 1,
            transition: {duration: 2.4, delay: 0.4, ease: "easeIn"}

        }}
        className="py-6"
        >
            <div className="container mx-auto">
                <div className="flex flex-col xl:flex-row gap-[30px]">
                    {/* form */}
                    <div className="xl:h-[54%] order-2 xl:order-none">
                        <form className="flex flex-col gap-6 p-10 bg-[#27272c]
                        rounded-xl">
                            <h3 className="text-4xl text-sky-400">Connect and let us work</h3>
                            <p className="text-white/60">lorem opi hluy mzy wuyw liuhjiu kjhjhsu vuFTF WEI76E </p>
                            {/* inputs */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input type="firstname" placeholder="First name"/>
                                <Input type="lastname" placeholder="Last name"/>
                                <Input type="email" placeholder="Email"/>
                                <Input type="phone" placeholder="Phone number"/>
                            </div>
                            {/* select */}
                            <Select>
                                <SelectTrigger className="w-full">
                                    <SelectValue placeholder="select a service"/>
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectGroup>
                                        <SelectLabel>Select a service</SelectLabel>
                                        <SelectItem value="est">Web Development</SelectItem>
                                        <SelectItem value="cst">AI Automation</SelectItem>
                                        <SelectItem value="mst">AI Chatbot</SelectItem>
                                    </SelectGroup>
                                </SelectContent>
                            </Select>
                            {/* text area */}
                            <Textarea
                            className="h-[200px]"
                            placeholder="enter your message here"/>
                            {/* btn */}
                            <Button size="md" className="max-w-40">send message</Button>
                        </form>
                    </div>
                    {/* info */}
                    <div className="flex-1 flex items-center xl:justify-end
                    order-1 xl:order-none xl:mb-0">
                        <ul className="flex flex-col gap-10">
                            {info.map((item,index)=>{
                                return (
                                    <li className="flex items-center gap-6" key={index}>
                                        <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px]
                                        bg-[#27272c] text-sky-400 rounded-md flex items-center justify-center">
                                            <div className="text-[28px]">{item.icon}</div>
                                        </div>
                                        <div className="flex-1">
                                            <p className="text-white/60">{item.title}</p>
                                            <h3 className="text-xl">{item.description}</h3>
                                        </div>
                                    </li>
                                )
                            })}
                        </ul>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Contact
