import { BsArrowRightShort } from "react-icons/bs";
import { GoArrowRight } from "react-icons/go";
import { FaTwitter } from 'react-icons/fa'
import { MdEmail } from 'react-icons/md'
import Tech from "@/components/Tech";
import Head from "next/head";
import { useSpring, animated } from 'react-spring';

export default function Home() {
  // Animation
  const logoAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)'},
    to: { opacity: 3, transform: 'translateY(0)'},
    delay: 1,
  });

  const twitterAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)'},
    to: { opacity: 3, transform: 'translateY(0)'},
    delay: 100,
  });

  const emailAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)'},
    to: { opacity: 3, transform: 'translateY(0)'},
    delay: 300,
  });

  const h11Animation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)'},
    to: { opacity: 3, transform: 'translateY(0)'},
    delay: 600,
  });

  const h12Animation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)'},
    to: { opacity: 3, transform: 'translateY(0)'},
    delay: 800,
  });

  const pAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)'},
    to: { opacity: 3, transform: 'translateY(0)'},
    delay: 1100,
  });

  const buttonAnimation = useSpring({
    from: { opacity: 0, transform: 'translateY(130px)'},
    to: { opacity: 3, transform: 'translateY(0)'},
    delay: 1400,
  });

  return (
    <>
      <Head>
        <title>S T O I C</title>
        <meta name="description" content="Harnessing AI-powered innovations to create engaging and modern websites that captivate and inspire." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Navbar */}
      <div className="w-full flex justify-between items-center p-10 bg-[var(--highlight)]">
        <div className="mask">
          <animated.h1 style={logoAnimation} className="text-xl cursor-pointer font-medium">S T O I C</animated.h1>
        </div>
        <div className='flex justify-center items-center gap-6 mask'>
          <animated.div style={twitterAnimation}>
            <FaTwitter size={25} className='transition-all text-[#3A5500] hover:text-black cursor-pointer'/>
          </animated.div>
          <animated.div style={emailAnimation}>
            <MdEmail size={25} className='transition-all text-[#3A5500] hover:text-black cursor-pointer'/>
          </animated.div>
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
          <div className="mask">
            <animated.h1 style={h11Animation} className="max-w-[1600px] text-4xl md:text-9xl text-center font-bold uppercase font-mono">Creating clean</animated.h1>
          </div>
          <div className="mask">
            <animated.h1 style={h12Animation} className="max-w-[1600px] text-4xl md:text-9xl text-center font-bold uppercase font-mono">functional websites</animated.h1>
          </div>
          <div className="mask">
            <animated.p style={pAnimation} className="text-[#3A5500] md:text-2xl md:w-[700px] p-5 text-center">Harnessing AI-powered innovations to create engaging and modern websites that captivate and inspire.</animated.p>
          </div>
          <div className="mask flex flex-col md:flex-row justify-center items-center gap-6 w-full px-5 md:p-0">
              <animated.button style={buttonAnimation} className="group w-full md:w-fit border border-black bg-black text-[#C4C4C4] font-medium px-8 py-3 rounded-full text-[19px] transition-all duration-300 hover:bg-transparent hover:text-black flex justify-center items-center gap-3">
                  <p>Start Project</p>
                  <GoArrowRight size={20} className="transition-transform duration-300 group-hover:rotate-45"/>
              </animated.button>
          </div>
      </div>

      <Tech />
    </>
  )
}
