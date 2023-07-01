import { BsArrowRightShort } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Tech from "@/components/Tech";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>S T O I C</title>
        <meta name="description" content="Track your affiliates for the stoic program" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <div className="w-full flex justify-between items-center p-10 bg-[var(--highlight)]">
        <h1 className="text-xl cursor-pointer font-medium">S T O I C</h1>
        <div className='flex justify-center items-center gap-6'>
          <FaTwitter size={25} className='transition-all text-[#3A5500] hover:text-black cursor-pointer'/>
          <MdEmail size={25} className='transition-all text-[#3A5500] hover:text-black cursor-pointer'/>
        </div>
      </div>

      {/* Hero */}

      {/* <div className="fixed bottom-0 left-0 m-[100px]">
          <div className="bg-[var(--highlight)] text-black transition-all duration-300 -rotate-45 hover:rotate-0 hover:bg-white hover:scale-105 w-[100px] h-[100px] flex justify-center items-center rounded-full cursor-pointer">
              <BsArrowRightShort size={50}/>
          </div>
      </div> */}
      <div className="flex flex-col justify-center items-center py-[100px] md:py-[200px] bg-[var(--highlight)]">
          {/* <div className="bg-[#1A1A1A] text-white px-3 py-1 rounded-full">
              <h1>Available for new projects</h1>
          </div> */}
          <h1 className="max-w-[1600px] text-4xl md:text-9xl text-center font-bold uppercase">Creating clean functional websites</h1>
          <p className="text-[#3A5500] md:text-2xl md:w-[700px] p-5 text-center">Harnessing AI-powered innovations to create engaging and modern websites that captivate and inspire.</p>
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 w-full px-5 md:p-0">
              <button className="group w-full md:w-fit border border-black bg-black text-[#C4C4C4] font-medium px-8 py-3 rounded-full text-[19px] transition-all duration-300 hover:bg-transparent hover:text-black flex justify-center items-center gap-3">
                  <p>Start Project</p>
                  <GoArrowRight size={20} className="transition-transform duration-300 group-hover:translate-x-2"/>
              </button>
              <button className="border w-full md:w-fit border-black font-medium px-8 py-3 rounded-full text-[19px] transition-all hover:bg-[#C4C4C4] hover:border-[#C4C4C4] flex justify-center items-center gap-3 group">
                  <p className="">Learn More</p>
                  <GoArrowRight size={20} className="transition-transform duration-300 group-hover:rotate-45"/>
              </button>
          </div>
      </div>

      <Tech />
    </>
  )
}
