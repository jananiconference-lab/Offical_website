import Navbar from "@/components/Navbar";
import Link from "next/link";

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col">
      <Navbar />
      
      <section className="flex-1 flex flex-col items-center justify-center px-6 text-center">
        <p className="text-sm tracking-[0.2em] text-gray-400 mb-6 uppercase">JANANI 2026</p>
        <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight mb-8">
          PARTNERS &<br />
          <span className="text-gray-400">SPONSORS</span>
        </h1>
        
        <div className="mt-12 space-y-8">
          {/* Medical Partner */}
          <div className="inline-block py-4 px-8 border-2 border-white/20 rounded-lg">
            <p className="text-sm tracking-[0.15em] text-gray-400 uppercase mb-2">Our Medical Partner</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Rajagiri Hospital</h2>
          </div>

          {/* Automobile Partner */}
          <div className="inline-block py-4 px-8 border-2 border-white/20 rounded-lg">
            <p className="text-sm tracking-[0.15em] text-gray-400 uppercase mb-2">Our Automobile Partner</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white">Nissan</h2>
          </div>
        </div>
        
        <p className="text-gray-400 mt-12 max-w-lg mx-auto text-lg">
          We are grateful for the exceptional support from our partners, making this event extraordinary.
        </p>

        <Link href="/" className="mt-16 text-sm tracking-widest uppercase text-gray-500 hover:text-white transition-colors flex items-center gap-2">
          <span>Back to home</span>
          <span aria-hidden="true">↙</span>
        </Link>
      </section>
    </main>
  );
}
