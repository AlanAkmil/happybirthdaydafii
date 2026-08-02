import MessageCard from "@/components/MessageCard";
import ReflexGame from "@/components/ReflexGame";
import QuizGame from "@/components/QuizGame";

export default function UcapanPage() {
  return (
    <main className="relative z-10 mx-auto max-w-2xl px-6 py-14">
      <h1 className="mb-8 text-center font-display text-4xl font-800 text-ink sm:text-5xl">
        Ucapan 🎉
      </h1>

      <MessageCard />

      <div className="mt-12">
        <h2 className="mb-5 text-center font-display text-2xl font-700 text-ink sm:text-3xl">
          Mini Game Receh
        </h2>
        <div className="space-y-6">
          <ReflexGame />
          <QuizGame />
        </div>
      </div>
    </main>
  );
}
