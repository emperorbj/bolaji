import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";

const Header = () => {
    return (
        <header className="py-8 xl:py-12 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">Bolaji</h1><span className="text-accent">.</span>
                </Link>
                {/* desktop nav */}
                <div className="hidden xl:flex items-center gap-8">
                    <Navbar/>
                    <Link href="/contact">
                        <Button>Hire me</Button>
                    </Link>
                </div>
                {/* mobilw nav */}
                <div className="xl:hidden">
                    mobile nav
                </div>
            </div>
        </header>
    )
}

export default Header
