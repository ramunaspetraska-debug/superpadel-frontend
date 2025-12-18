export const Footer = () => (
  <footer className="border-t border-slate-800/80 bg-surface/80 px-4 py-6 text-center text-sm text-slate-500 backdrop-blur">
    <div className="mx-auto flex max-w-6xl flex-col items-center gap-2 md:flex-row md:justify-between">
      <span>© {new Date().getFullYear()} Superpadel. Built for modern padel tournaments.</span>
      <span className="text-slate-400">Ready for Railway · React + Vite + Tailwind</span>
    </div>
  </footer>
);

