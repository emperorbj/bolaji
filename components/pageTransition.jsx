"use client";
import { AnimatePresence, motion } from "framer-motion";
import { usePathname } from "next/navigation";
const pageTransition = ({children}) => {
    const pathname = usePathname();
    return (
    <AnimatePresence>
        <div key={pathname}>
            <motion.div
            className="h-screen w-screen fixed
            bg-slate-800 top-0
            pointer-events-none" 
            initial={{opacity: 1}} 
            animate={{opacity:0, transition: {delay:1, duration: 0.4, ease: 'easeInOut'}}}
            />
            {children}
        </div>
    </AnimatePresence>)
}

export default pageTransition
