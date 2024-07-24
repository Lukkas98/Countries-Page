"use client";
import { useState } from "react";

export default function CountryModal({ country, children }) {
  const [showTooltip, setShowTooltip] = useState(false);
  const [animateTooltip, setAnimateTooltip] = useState(false);

  const handleMouseEnter = () => {
    setAnimateTooltip(true);
    setShowTooltip(true);
  };

  const handleMouseLeave = () => {
    setAnimateTooltip(false);
    setTimeout(() => setShowTooltip(false), 400); // Tiempo de la animación de salida
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {children}
      {showTooltip && (
        <div
          className={`absolute text-center pointer-events-none z-30 flex flex-col items-center gap-1 left-1/2 transform bottom-full mb-2 w-72 p-2 text-sm leading-tight text-white bg-black bg-opacity-95 rounded shadow-black shadow-md ${
            animateTooltip ? "fade-in" : "fade-out"
          }`}
        >
          <p className="font-bold text-base">{country.name}</p>
          <p className=" text-sm">Click for more information</p>
        </div>
      )}
    </div>
  );
}
