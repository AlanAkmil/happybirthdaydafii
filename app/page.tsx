import OpenGiftButton from "@/components/OpenGiftButton";

export default function Home() {
  return (
    <main className="relative z-10 flex min-h-[85vh] flex-col items-center justify-center px-6 py-16 text-center">
      <div className="mb-4 animate-wiggle text-6xl">🎂</div>

      <p className="font-display text-lg font-600 text-grape sm:text-xl">
        Hari ini spesial buat...
      </p>

      <h1 className="mt-2 font-display text-6xl font-800 leading-tight text-ink sm:text-7xl">
        Dafi!
      </h1>

      <p className="mx-auto mt-5 max-w-md font-body text-base text-ink/70 sm:text-lg">
        Ada kado kecil dari Alan buat kamu. Yuk buka dulu 🎈
      </p>

      <div className="mt-10">
        <OpenGiftButton />
      </div>
    </main>
  );
}
