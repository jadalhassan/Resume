export default function Footer() {
  return (
    <footer className="border-t border-slate-800 py-10 mt-8">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <p className="text-slate-400 font-medium mb-2">Jad Al Hassan</p>
        <div className="flex items-center justify-center gap-4 text-slate-500 text-sm flex-wrap">
          <a
            href="mailto:jadalhassan.ja034@gmail.com"
            className="hover:text-violet-400 transition-colors"
          >
            jadalhassan.ja034@gmail.com
          </a>
          <span>·</span>
          <span>+961 81 665 911</span>
          <span>·</span>
          <span>Beirut, Lebanon</span>
        </div>
        <p className="text-slate-700 text-xs mt-6">
          Built with React &amp; Tailwind CSS
        </p>
      </div>
    </footer>
  )
}
