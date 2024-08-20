import Link from "next/link";
import { Button } from "./ui/button";
import Navbar from "./Navbar";
import MobileNav from "./MobileNav";

const Header = () => {
    return (
        <header className="py-2 xl:py-4 text-white">
            <div className="container mx-auto flex justify-between items-center">
                {/* logo */}
                <Link href="/">
                    <h1 className="text-4xl font-semibold">Bolaji</h1>
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
                    <MobileNav/>
                </div>
            </div>
        </header>
    )
}

export default Header
