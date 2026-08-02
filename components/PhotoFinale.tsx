import Image from "next/image";

export default function PhotoFinale() {
  return (
    <div className="mx-auto max-w-md rounded-3xl border-2 border-gold/40 bg-white p-7 text-center shadow-lg sm:p-9">
      <p className="mb-5 text-3xl">🏆</p>

      <div className="mx-auto w-56 overflow-hidden rounded-2xl border-4 border-cream shadow-md sm:w-64">
        <Image
          src="https://www.image2url.com/r2/default/images/1785675250130-7bb8e183-de90-405e-97ff-767c9f6bcf4d.jpg"
          alt="Dafi"
          width={512}
          height={512}
          className="h-auto w-full"
          priority
        />
      </div>

      <p className="mt-6 font-display text-2xl font-800 text-pink">
        Selamat Ulang Tahun, Dafi! 🎂
      </p>

      <p className="mt-2 font-display text-base font-700 text-ink/60">
        Dari Alan
      </p>
    </div>
  );
}
