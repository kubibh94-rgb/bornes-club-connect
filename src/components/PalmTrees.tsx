import { useEffect, useState } from "react";
import palmTree from "@/assets/palm-tree-cartoon.png";

const PalmTrees = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Calculate how far the palms should move based on scroll
  const leftPalmOffset = Math.min(scrollY * 0.3, 200);
  const rightPalmOffset = Math.min(scrollY * 0.3, 200);

  return (
    <>
      {/* Left Palm Tree */}
      <div
        className="fixed left-0 bottom-0 z-20 transition-transform duration-300 pointer-events-none"
        style={{
          transform: `translateX(-${leftPalmOffset}px)`,
          opacity: 1 - scrollY / 1000,
        }}
      >
        <img
          src={palmTree}
          alt=""
          className="h-[600px] w-auto opacity-80 drop-shadow-2xl"
          style={{ transform: "scaleX(-1)" }}
        />
      </div>

      {/* Right Palm Tree */}
      <div
        className="fixed right-0 bottom-0 z-20 transition-transform duration-300 pointer-events-none"
        style={{
          transform: `translateX(${rightPalmOffset}px)`,
          opacity: 1 - scrollY / 1000,
        }}
      >
        <img
          src={palmTree}
          alt=""
          className="h-[600px] w-auto opacity-80 drop-shadow-2xl"
        />
      </div>
    </>
  );
};

export default PalmTrees;
