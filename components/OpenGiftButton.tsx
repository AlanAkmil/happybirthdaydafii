"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function OpenGiftButton() {
  const [bursting, setBursting] = useState(false);
  const router = useRouter();

  function handleClick() {
    setBursting(true);
    setTimeout(() => router.push("/ucapan"), 550);
  }

  return (
    <div className="relative flex flex-col items-center">
      <button
        onClick={handleClick}
        className="group relative rounded-full bg-pink px-8 py-4 font-display text-lg font-700 text-white shadow-lg shadow-pink/30 transition-transform hover:scale-105 active:scale-95 sm:text-xl"
      >
        🎁 Buka Kadonya
      </button>

      {bursting && (
        <div className="pointer-events-none absolute -top-6 left-1/2 -translate-x-1/2 text-3xl">
          {["🎉", "✨", "🎊", "💜", "⭐"].map((e, i) => (
            <span
              key={i}
              className="absolute animate-popIn"
              style={{
                left: `${(i - 2) * 26}px`,
                animationDelay: `${i * 0.05}s`,
              }}
            >
              {e}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}
