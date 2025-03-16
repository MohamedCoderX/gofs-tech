"use client";
import Image from "next/image";
import React, { useState } from "react";
import { cn } from "@/lib/utils";

// Individual Card Component
export const Card = React.memo(({ card, index, hovered, setHovered }) => (
  <div
    onMouseEnter={() => setHovered(index)}
    onMouseLeave={() => setHovered(null)}
    className={cn(
      "relative rounded-lg bg-gray-100 dark:bg-neutral-900 overflow-hidden h-64 md:h-96 w-full transition-all duration-300 ease-out",
      hovered !== null && hovered !== index && "blur-sm scale-95"
    )}
  >
    {/* Background Image */}
    <Image
      src={card.src}
      alt={card.title}
      fill
      className="object-cover absolute inset-0"
    />

    {/* Overlay Content */}
    <div
      className={cn(
        "absolute inset-0 bg-black/50 flex flex-col p-6 transition-opacity duration-300 justify-end",
        hovered === index ? "opacity-100" : "opacity-0"
      )}
    >
      <h3 className="text-lg md:text-2xl font-semibold text-white">{card.title}</h3>
      <p className="text-sm md:text-lg text-white mt-2">{card.para}</p>
    </div>
  </div>
));

Card.displayName = "Card";

// Main FocusCards Component
export function FocusCards({ cards }) {
  const [hovered, setHovered] = useState(null);

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 max-w-7xl mx-auto px-6">
      {cards.map((card, index) => (
        <Card key={card.title} card={card} index={index} hovered={hovered} setHovered={setHovered} />
      ))}
    </div>
  );
}
