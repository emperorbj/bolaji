"use client"
import Link from "next/link";
import { usePathname } from "next/navigation";

const Links = [
    {
        name: "home",
        path: "/"
    },
    {
        name: "services",
        path: "/services"
    },
    {
        name: "resume",
        path: "/resume"
    },
    {
        name: "work",
        path: "/work "
    },
    {
        name: "contact",
        path: "/contact "
    }
]
const Navbar = () => {
    const pathname = usePathname();
    return (
        <nav className="flex gap-8">
            {Links.map((link,index) => {
                return <Link key={index} href={link.path} className={`${link.path === pathname && 'text-sky-400 border-sky-400 border-b-2'}
                capitalize font-medium hover:text-sky-300 transition-all`}>{link.name}</Link>
            })}
        </nav>
    )
    }

export default Navbar