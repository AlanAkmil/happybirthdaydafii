"use client";

import { useEffect, useRef } from "react";

type Piece = {
  x: number;
  y: number;
  size: number;
  speed: number;
  drift: number;
  rotation: number;
  spin: number;
  color: string;
};

const COLORS = ["#FF4D8D", "#FFC93C", "#35C4F0", "#7B2FF7", "#21D19F"];

export default function ConfettiField() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const count = width < 640 ? 22 : 40;
    const pieces: Piece[] = Array.from({ length: count }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() * 5 + 4,
      speed: Math.random() * 0.6 + 0.3,
      drift: (Math.random() - 0.5) * 0.6,
      rotation: Math.random() * 360,
      spin: (Math.random() - 0.5) * 2,
      color: COLORS[Math.floor(Math.random() * COLORS.length)],
    }));

    let raf = 0;

    function resize() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
    }

    function draw() {
      ctx!.clearRect(0, 0, width, height);
      for (const p of pieces) {
        ctx!.save();
        ctx!.translate(p.x, p.y);
        ctx!.rotate((p.rotation * Math.PI) / 180);
        ctx!.fillStyle = p.color;
        ctx!.globalAlpha = 0.55;
        ctx!.fillRect(-p.size / 2, -p.size / 2, p.size, p.size * 0.5);
        ctx!.restore();

        if (!prefersReduced) {
          p.y += p.speed;
          p.x += p.drift;
          p.rotation += p.spin;
          if (p.y > height + 10) {
            p.y = -10;
            p.x = Math.random() * width;
          }
        }
      }
      raf = requestAnimationFrame(draw);
    }

    draw();
    window.addEventListener("resize", resize);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-0"
      aria-hidden="true"
    />
  );
}
