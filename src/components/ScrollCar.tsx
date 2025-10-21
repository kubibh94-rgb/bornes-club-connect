import { useEffect, useState } from "react";
import carImage from "@/assets/car-cartoon.png";

const ScrollCar = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // La voiture avance rapidement avec le scroll (multiplier par 1.5 pour plus de vitesse)
  const carPosition = scrollY * 1.5;

  return (
    <div
      className="fixed bottom-20 z-30 transition-transform duration-100 pointer-events-none"
      style={{
        transform: `translateX(${carPosition}px)`,
        left: '-200px',
      }}
    >
      <img
        src={carImage}
        alt=""
        className="h-24 w-auto drop-shadow-2xl"
      />
    </div>
  );
};

export default ScrollCar;
