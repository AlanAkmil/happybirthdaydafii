export default function Footer() {
  return (
    <footer className="relative z-10 px-6 pb-10 pt-6 text-center">
      <p className="font-body text-xs text-ink/40">
        dibuat dengan 💜 oleh Alan &middot; {new Date().getFullYear()}
      </p>
    </footer>
  );
}
