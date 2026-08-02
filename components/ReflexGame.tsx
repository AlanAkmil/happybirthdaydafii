"use client";

import { useEffect, useRef, useState } from "react";

type Phase = "idle" | "waiting" | "go" | "early" | "result";

export default function ReflexGame() {
  const [phase, setPhase] = useState<Phase>("idle");
  const [reaction, setReaction] = useState<number | null>(null);
  const [best, setBest] = useState<number | null>(null);
  const startRef = useRef<number>(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  function start() {
    setPhase("waiting");
    setReaction(null);
    const delay = 1200 + Math.random() * 2200;
    timeoutRef.current = setTimeout(() => {
      startRef.current = performance.now();
      setPhase("go");
    }, delay);
  }

  function handleTap() {
    if (phase === "idle" || phase === "result" || phase === "early") {
      start();
      return;
    }
    if (phase === "waiting") {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
      setPhase("early");
      return;
    }
    if (phase === "go") {
      const time = Math.round(performance.now() - startRef.current);
      setReaction(time);
      setBest((b) => (b === null ? time : Math.min(b, time)));
      setPhase("result");
    }
  }

  useEffect(() => {
    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, []);

  const rankOf = (ms: number) => {
    if (ms < 220) return "Kilat! ⚡";
    if (ms < 300) return "Kencang banget 🔥";
    if (ms < 400) return "Lumayan 👍";
    return "Santai amat 😴";
  };

  return (
    <div className="rounded-3xl border-2 border-sky/30 bg-white p-6 shadow-md sm:p-7">
      <p className="mb-1 font-display text-lg font-700 text-ink">
        🕹️ Uji Refleks
      </p>
      <p className="mb-5 text-sm text-ink/60">
        Tunggu kotaknya berubah biru terang, terus tap secepat mungkin.
        Jangan gaspol duluan ya.
      </p>

      <button
        onClick={handleTap}
        className={`flex h-36 w-full items-center justify-center rounded-2xl border-2 font-display text-base font-700 transition-colors sm:h-40 ${
          phase === "go"
            ? "border-sky bg-sky text-white"
            : phase === "early"
            ? "border-pink bg-pink-soft text-pink"
            : "border-ink/10 bg-cream text-ink/70"
        }`}
      >
        {phase === "idle" && "Tap untuk mulai"}
        {phase === "waiting" && "Tunggu..."}
        {phase === "go" && "TAP SEKARANG!"}
        {phase === "early" && "Kecepetan, tap buat ulang"}
        {phase === "result" && reaction !== null && `${reaction} ms — tap lagi`}
      </button>

      {phase === "result" && reaction !== null && (
        <div className="mt-4 space-y-1 text-center">
          <p className="font-display text-base font-700 text-grape">
            {rankOf(reaction)}
          </p>
          {best !== null && (
            <p className="text-xs text-ink/50">Rekor sesi ini: {best} ms</p>
          )}
        </div>
      )}
    </div>
  );
}
