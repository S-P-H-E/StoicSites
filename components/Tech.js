import { useEffect, useRef } from 'react';
import { SiNextdotjs } from 'react-icons/si';
import { SiTailwindcss } from 'react-icons/si';
import { SiHtml5 } from 'react-icons/si';
import { SiJavascript } from 'react-icons/si';
import { SiCss3 } from 'react-icons/si';

import { useSpring, animated } from 'react-spring';

export default function Tech() {
//   const badgeAnimation = useSpring({
//     from: { opacity: 0, transform: 'translateY(-130px)' },
//     to: { opacity: 3, transform: 'translateY(0)' },
//     delay: 1,
//   });

  const containerRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    let intervalId;

    function animateScroll() {
      const currentScroll = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;
      const newScroll = currentScroll + 1;

      if (newScroll >= maxScroll) {
        container.scrollLeft = 0;
      } else {
        container.scrollLeft = newScroll;
      }
    }

    intervalId = setInterval(animateScroll, 30);

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className='mask'>
     
    <animated.div className="bg-black py-16 text-[var(--highlight)] flex justify-between">
      <div className="flex w-[4000px] gap-[300px]" style={{ overflow: 'auto' }} ref={containerRef}>
        <div className="flex justify-center items-center w-fit">
          <SiNextdotjs className="mx-3" size={30} />
          <h1 className="text-2xl font-medium">NextJS</h1>
        </div>
        <div className="flex justify-center items-center w-fit">
          <SiTailwindcss className="mx-3" size={30} />
          <h1 className="text-2xl font-medium">TailwindCSS</h1>
        </div>
        <div className="flex justify-center items-center w-fit">
          <SiHtml5 className="mx-3" size={30} />
          <h1 className="text-2xl font-medium">HTML</h1>
        </div>
        <div className="flex justify-center items-center w-fit">
          <SiJavascript className="mx-3" size={30} />
          <h1 className="text-2xl font-medium">Javascript</h1>
        </div>
        <div className="flex justify-center items-center w-fit">
          <SiCss3 className="mx-3" size={30} />
          <h1 className="text-2xl font-medium">CSS</h1>
        </div>

        <div className="flex justify-center items-center w-fit">
          <SiNextdotjs className="mx-3" size={30} />
          <h1 className="text-2xl font-medium">NextJS</h1>
        </div>
        <div className="flex justify-center items-center w-fit">
          <SiTailwindcss className="mx-3" size={30} />
          <h1 className="text-2xl font-medium">TailwindCSS</h1>
        </div>
        <div className="flex justify-center items-center w-fit">
          <SiHtml5 className="mx-3" size={30} />
          <h1 className="text-2xl font-medium">HTML</h1>
        </div>
        <div className="flex justify-center items-center w-fit">
          <SiJavascript className="mx-3" size={30} />
          <h1 className="text-2xl font-medium">Javascript</h1>
        </div>
        <div className="flex justify-center items-center w-fit">
          <SiCss3 className="mx-3" size={30} />
          <h1 className="text-2xl font-medium">CSS</h1>
        </div>
      </div>
    </animated.div>
     
    </div>
  );
}