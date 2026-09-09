import Link from "next/link";

export default function CTAStrip() {
  return (
    <section className="bg-blue-600 text-white py-16 md:py-20 px-6 md:px-12 relative overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-8 relative z-10">
        
        {/* Left Side Heading & Subtitle */}
        <div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter uppercase leading-none">
            GOT A PROJECT?
          </h2>
          <p className="text-blue-100 text-sm md:text-base mt-3 font-medium">
            Let's build something that stands out.
          </p>
        </div>

        {/* Right Side Action Buttons */}
        <div className="flex flex-wrap items-center gap-4">
          <Link
            href="/process"
            className="bg-white text-blue-600 hover:bg-slate-100 font-bold text-xs md:text-sm px-6 py-3.5 tracking-[0.15em] uppercase transition-all duration-200 rounded-sm flex items-center gap-2 shadow-lg"
          >
            MAKE BUILD <span className="text-base">→</span>
          </Link>

          <Link
            href="/process"
            className="border border-white/30 hover:border-white bg-white/10 hover:bg-white/20 text-white font-bold text-xs md:text-sm px-6 py-3.5 tracking-[0.15em] uppercase transition-all duration-200 rounded-sm"
          >
            SEE PROCESS
          </Link>
        </div>

      </div>
    </section>
  );
}