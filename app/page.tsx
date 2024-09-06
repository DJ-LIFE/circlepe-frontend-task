"use client"
import { useEffect, useState } from 'react';
import { screens } from './data';


export default function Home() {
  const [idx, setIdx] = useState(0)
  const [toggle, setToggle] = useState(false)
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === ' ' && !event.repeat) {
        setToggle(prevToggle => !prevToggle);
      }
    }
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    }
  }, [])
  useEffect(() => {
    const interval = setInterval(() => {
      setIdx((prev) => (prev === 5 ? 0 : prev + 1));
    }, 2000);
    if (toggle) clearInterval(interval);
  }, [toggle]);
  return (
    <>
      <section className=" pt-10 bg-[#1B1B1B]">
        <div className=" bg-[radial-gradient(35.19%_35.19%_at_50%_50%,rgba(59,149,255,0.17)_0%,rgba(28,106,197,0)_100%)] overflow-clip">
          <div className="container">
            {/* mobile Slider */}
            <div className='min-h-[60px] md:hidden flex items-center justify-center p-2'>
              <div className='w-full max-w-[400px] bg-slider-bg h-[3px] rounded-full'>
                {screens[idx] && (
                  <div
                    className={`${idx === 5 ? "bg-slider-green" : "bg-slider-blue"} h-full relative transition-all ease-out rounded-full`}
                    style={{ width: screens[idx].slider }}  // Use slider width from data.tsx
                  >
                    <div className={`${idx === 5 ? "bg-slider-green" : "bg-slider-blue"} w-[14px] h-[14px] rounded-full absolute top-1/2 right-0 -translate-y-1/2`}></div>
                  </div>
                )}
              </div>
            </div>

            {/* Content */}
            <div>
              <h1>{screens[idx].title}</h1>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

