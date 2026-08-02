"use client";

import { useState } from "react";

type Question = {
  q: string;
  options: string[];
  answer: number;
  explain: string;
};

const questions: Question[] = [
  {
    q: "Kalau ulang tahun itu hadiah dari semesta, hal pertama yang harus disyukuri apa?",
    options: [
      "Masih dikasih kesehatan",
      "Masih punya temen-temen baik",
      "Masih dikasih rejeki",
      "Semuanya itu",
    ],
    answer: 3,
    explain: "Betul, ambil paket komplitnya aja bre.",
  },
  {
    q: "Doa paling penting buat Dafi tahun ini?",
    options: [
      "Sehat terus",
      "Rejeki lancar",
      "Makin akrab sama temen-temen",
      "Semua di atas",
    ],
    answer: 3,
    explain: "Aman, semua jawaban benar kok.",
  },
  {
    q: "Cara paling asik ngerayain ulang tahun?",
    options: [
      "Kumpul bareng temen",
      "Makan enak",
      "Dikasih kejutan receh",
      "Kombinasi semuanya",
    ],
    answer: 3,
    explain: "Setuju banget.",
  },
];

export default function QuizGame() {
  const [step, setStep] = useState(0);
  const [selected, setSelected] = useState<number | null>(null);
  const [done, setDone] = useState(false);

  const current = questions[step];

  function pick(i: number) {
    if (selected !== null) return;
    setSelected(i);
  }

  function next() {
    if (step + 1 < questions.length) {
      setStep(step + 1);
      setSelected(null);
    } else {
      setDone(true);
    }
  }

  function restart() {
    setStep(0);
    setSelected(null);
    setDone(false);
  }

  return (
    <div className="rounded-3xl border-2 border-gold/40 bg-white p-6 shadow-md sm:p-7">
      <p className="mb-5 font-display text-lg font-700 text-ink">
        🎯 Kuis Receh
      </p>

      {!done ? (
        <>
          <p className="mb-1 text-xs font-600 text-ink/50">
            Pertanyaan {step + 1} / {questions.length}
          </p>
          <p className="mb-4 text-base text-ink">{current.q}</p>

          <div className="space-y-2">
            {current.options.map((opt, i) => {
              const isAnswer = i === current.answer;
              const isSelected = selected === i;
              const showState = selected !== null;
              return (
                <button
                  key={opt}
                  onClick={() => pick(i)}
                  className={`w-full rounded-xl border-2 px-4 py-3 text-left text-sm font-600 transition-colors ${
                    showState && isAnswer
                      ? "border-mint bg-mint/10 text-ink"
                      : showState && isSelected
                      ? "border-pink bg-pink-soft/50 text-ink"
                      : "border-ink/10 bg-cream text-ink hover:border-grape/40"
                  }`}
                >
                  {opt}
                </button>
              );
            })}
          </div>

          {selected !== null && (
            <div className="mt-4 border-t border-ink/10 pt-4">
              <p className="text-sm text-ink/60">{current.explain}</p>
              <button
                onClick={next}
                className="mt-3 rounded-full bg-grape px-5 py-2 font-display text-sm font-700 text-white"
              >
                {step + 1 < questions.length ? "Lanjut" : "Lihat Hasil"}
              </button>
            </div>
          )}
        </>
      ) : (
        <div>
          <p className="text-base text-ink">
            Kuis selesai! Semua jawaban otomatis lolos, soalnya ini cuma
            alasan buat ngerayain hari lu, bre.
          </p>
          <button
            onClick={restart}
            className="mt-4 rounded-full border-2 border-ink/10 px-5 py-2 font-display text-sm font-700 text-ink/70"
          >
            Ulangi Kuis
          </button>
        </div>
      )}
    </div>
  );
}
