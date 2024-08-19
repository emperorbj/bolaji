"use client";
import { Sheet, SheetContent, SheetTrigger } from"@/components/ui/sheet";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { CiMenuFries } from "react-icons/ci";

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
const MobileNav = () => {
    const pathname = usePathname();
    return (
        <Sheet>
            <SheetTrigger className="flex justify-center items-center">
                <CiMenuFries className="text-[32px] text-blue-300"/>
            </SheetTrigger>
            <SheetContent className="flex flex-col">
                <div className="mt-32 mb-40 text-center
                text-2xl">
                <Link href="/">
                    <h1 className="text-4xl font-semibold">
                        Bolaji<span className="text-blue-300">.</span>
                    </h1>
                </Link>
                </div>
                <nav className="flex flex-col
                justify-center items-center gap-8">
                    {Links.map((link,index) =>{
                        return(
                            <Link className={`${link.path === pathname && "text-blue-300 transition-all"}text-xl capitalize hover:text-blue-300 transition-all`} 
                            key={index} href={link.path}>
                                {link.name}
                            </Link>
                        )
                    })}
                </nav>
            </SheetContent>
        </Sheet>
    )
}

export default MobileNav
