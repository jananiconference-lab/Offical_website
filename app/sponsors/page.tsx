import Navbar from "@/components/Navbar";
import Link from "next/link";
import Image from "next/image";

const partners = [
  { name: "Raphael Media & Events", role: "Media Partner", logo: "/images/Raphel1.jpeg" },
  { name: "Rajagiri Hospital", role: "Medical Partner", logo: "/images/RAJAGIRI.jpg" },
  { name: "Nissan", role: "Automobile Partner", logo: "/images/nissan.jpeg" },
  { name: "ATIP", role: "Partner", logo: "/logos/atip.png" },
  { name: "Mediahawks", role: "Partner", logo: "/logos/Mediahawks.png" },
];

export default function SponsorsPage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black flex flex-col pt-32 pb-16">
      <Navbar />
      
      <section className="flex-1 max-w-6xl mx-auto w-full px-6 flex flex-col items-center">
        
        <div className="text-center mb-16 mt-8">
          <p className="text-sm tracking-[0.2em] text-gray-400 mb-6 uppercase">JANANI 2026</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight mb-6">
            PARTNERS &<br />
            <span className="text-gray-400">SPONSORS</span>
          </h1>
          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            We are grateful for the exceptional support from our partners, making this event extraordinary.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-8 w-full justify-items-center">
          {partners.map((partner, index) => (
            <div 
              key={index}
              className="w-full max-w-[320px] flex flex-col items-center bg-[#111] border border-white/10 rounded-3xl p-6 hover:bg-[#1a1a1a] hover:-translate-y-2 transition-all duration-300 shadow-2xl"
            >
              <div className={`w-[200px] h-[200px] rounded-2xl flex items-center justify-center p-6 mb-6 ${partner.name === "Raphael Media & Events" ? "bg-transparent" : "bg-white shadow-inner"}`}>
                <Image 
                  src={partner.logo} 
                  alt={partner.name} 
                  width={200} 
                  height={200} 
                  className={`object-contain max-w-full max-h-full ${partner.name === "Raphael Media & Events" ? "" : "mix-blend-multiply"}`}
                />
              </div>
              <p className="text-xs tracking-[0.2em] text-gray-500 uppercase mb-2 text-center font-medium">{partner.role}</p>
              <h2 className="text-xl font-bold text-white text-center">{partner.name}</h2>
            </div>
          ))}
        </div>
        
        <Link href="/" className="mt-24 text-sm tracking-widest uppercase text-gray-500 hover:text-white transition-colors flex items-center gap-2 group">
          <span className="group-hover:-translate-x-2 transition-transform duration-300">←</span>
          <span>Back to home</span>
        </Link>
      </section>
    </main>
  );
}
