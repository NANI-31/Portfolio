import { useEffect, useState, useRef } from "react";
import gsap from "gsap";

const LandingLoader = () => {
  const [counter, setCounter] = useState(0);
  const width =
    typeof window !== "undefined" && window.innerWidth < 640 ? 6 : 10;
  useEffect(() => {
    let currentValue = 0;
    let timeoutId: NodeJS.Timeout;
    const updateCounter = () => {
      if (currentValue >= 100) {
        gsap.to(".counter", {
          delay: 1.2,
          opacity: 0,
          duration: 0.25,
        });
        gsap.to(".bar", {
          delay: 0.5,
          height: 0,
          duration: 1.5,
          stagger: {
            amount: 0.5,
          },
          ease: "power4.inOut",
        });
        gsap.to(".ll", {
          delay: 1.5,
          zIndex: -1,
        });
        return;
      }
      currentValue += Math.floor(Math.random() * 5) + 1;
      if (currentValue > 100) currentValue = 100;
      setCounter(currentValue);
      const delay = Math.floor(Math.random() * 200) + 50;
      timeoutId = setTimeout(updateCounter, delay);
    };
    updateCounter();
    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="relative overflow-hidden bg-gray-400 z-1000 ll">
      <h1 className="counter fixed w-full h-screen flex justify-end border-0 -top-20 font-sans lg:top-0 left-15 items-end z-[100000] text-gray-300 px-20 max-md:text-[30vw] text-[20vw]">
        {counter}
      </h1>

      <div className="fixed z-20 flex w-screen h-screen bottom-10 overlay">
        {[...Array(width)].map((_, i) => (
          <div key={i} className="w-full h-[110vh] bar bg-neutral-900"></div>
        ))}
      </div>
    </div>
  );
};

export default LandingLoader;
