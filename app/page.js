import Photo from "@/components/Photo";
import Socials from "@/components/Socials";
import Stat from "@/components/Stat";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";


export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className=" xl:h-[570px] flex flex-col xl:flex-row items-center justify-between xl:pt-8 
        xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span className="text-xl">Software Development</span>
            <h1 className="h1 mb-6">
              Hello I am <br/><span className="text-sky-400">Opatola Bolaji</span>
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I excel at crafting software solutions and proficient in various programming
              languages and technologies. 
            </p>
            {/* cv and socials buttons */}
            <div className="flex flex-col xl:flex-row items-center gap-2 ">
              <Link href="https://drive.google.com/file/d/1T4NkKJxrMO3WbsxygO_O_V3htIdEYtq_/view?usp=sharing">
              <Button variant='outline' size='lg' className='uppercase flex items-center gap-2'>
                <span>Download CV</span>
                <FiDownload className="text-xl"/>
              </Button>
              </Link>
              <div className="mb-8 xl:mb-0">
                <Socials
                containerStyles="flex gap-6"
                iconStyles="w-9 h-9 border border-sky-400 rounded-full
                flex justify-center items-center text-sky-400
                text-base hover:bg-sky-400 hover:text-slate-800
                hover:transition-all duration-500"
                />
              </div>
            </div>
          </div>
          {/* profile photo */}
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo/>
          </div>
        </div>
      </div>
      <Stat/>
    </section>
  );
}
