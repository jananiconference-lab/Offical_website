import Navbar from "@/components/Navbar";
import Link from "next/link";

const scheduleData = [
  {
    time: "8:00 AM",
    title: "Registration Begins",
    description: "Delegate registration, badge collection, and distribution of delegate kits.",
  },
  {
    time: "8:45 AM – 9:30 AM",
    title: "Cultural Prelude",
    description: "Cultural performances by the students of St. Teresa's College.",
  },
  {
    time: "9:30 AM – 10:00 AM",
    title: "Opening Ceremony",
    description: "Traditional Chenda Melam and ceremonial welcome procession; Janani Vandanam invocation dance; lighting of the ceremonial lamp; welcome address to delegates and dignitaries; introduction to the theme of JANANI 2026.",
  },
  {
    time: "10:00 AM – 10:45 AM",
    title: "Session I",
    description: "5-minute Inspiration Talk followed by a 40-minute Panel Discussion.",
  },
  {
    time: "10:45 AM – 10:50 AM",
    title: "Transition",
    description: "",
  },
  {
    time: "10:50 AM – 11:35 AM",
    title: "Session II",
    description: "5-minute Inspiration Talk followed by a 40-minute Panel Discussion.",
  },
  {
    time: "11:35 AM – 12:00 PM",
    title: "Cultural Segment",
    description: "Veerangana: Women's Kalaripayattu presentation by Raaga Shankar, followed by cultural performances by the students of St. Teresa's College.",
  },
  {
    time: "12:00 PM – 12:45 PM",
    title: "Session III",
    description: "5-minute Inspiration Talk followed by a 40-minute Panel Discussion.",
  },
  {
    time: "12:45 PM – 1:00 PM",
    title: "Lunch Break",
    description: "",
  },
  {
    time: "1:00 PM – 1:20 PM",
    title: "Cultural Programme",
    description: "Performances by the students of St. Teresa's College.",
  },
  {
    time: "1:20 PM – 1:40 PM",
    title: "Fireside Chat",
    description: "Featuring Nisha Jose K. Mani.",
  },
  {
    time: "1:40 PM – 1:45 PM",
    title: "Transition",
    description: "",
  },
  {
    time: "1:45 PM – 2:30 PM",
    title: "Session IV",
    description: "5-minute Inspiration Talk followed by a 40-minute Panel Discussion.",
  },
  {
    time: "2:30 PM – 2:35 PM",
    title: "Transition",
    description: "",
  },
  {
    time: "2:35 PM – 3:20 PM",
    title: "Session V",
    description: "5-minute Inspiration Talk followed by a 40-minute Panel Discussion.",
  },
  {
    time: "3:20 PM – 4:05 PM",
    title: "Musical & Cultural Showcase",
    description: "Special musical performance by Anila Rajeev, followed by cultural performances by the students of St. Teresa's College.",
  },
  {
    time: "4:05 PM – 5:15 PM",
    title: "Grand Inaugural Ceremony",
    description: "Grand Inaugural Ceremony of JANANI 2026 and Presentation of the JANANI Achievement Awards 2026, inaugurated by the Hon'ble Chief Minister of Kerala.",
  },
  {
    time: "5:15 PM – 5:20 PM",
    title: "Teaser Release",
    description: "Launch of the AI film KALAM'S ANGEL by the Dr. APJ Abdul Kalam International Foundation (APJAKIF).",
  },
  {
    time: "5:20 PM – 5:25 PM",
    title: "Closing Ceremony",
    description: "Vote of Thanks and National Anthem.",
  },
  {
    time: "5:25 PM – 6:30 PM",
    title: "JANANI Fashion Show & Musical Performance",
    description: "JANANI Fashion Show followed by a musical performance by Amritha Rajan (Indian Idol Fame).",
  }
];

export default function SchedulePage() {
  return (
    <main className="min-h-screen bg-black text-white selection:bg-white selection:text-black">
      
      <section className="pt-32 pb-20 px-6 md:px-12 max-w-6xl mx-auto">
        <div className="mb-16">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-8">
            <div>
              <p className="text-sm tracking-[0.2em] text-gray-400 mb-4 uppercase">JANANI 2026</p>
              <h1 className="text-5xl md:text-7xl font-bold leading-none tracking-tight">
                FULL-DAY<br />
                <span className="text-gray-400">PROGRAMME</span>
              </h1>
            </div>
            
            <div className="text-right border-l-2 border-white/20 pl-6 md:border-l-0 md:border-r-2 md:pr-6 md:pl-0 self-start md:self-end">
              <p className="font-medium text-xl">24 July 2026</p>
              <p className="text-gray-400 mt-1 max-w-[200px]">St. Teresa's College (Autonomous), Ernakulam</p>
            </div>
          </div>
        </div>

        <div className="relative border-l border-white/20 ml-4 md:ml-8">
          {scheduleData.map((item, index) => (
            <div key={index} className="mb-12 relative pl-8 md:pl-16 group">
              {/* Timeline Dot */}
              <div className="absolute w-3 h-3 bg-white rounded-full -left-[6.5px] top-2 transition-transform duration-300 group-hover:scale-150 group-hover:bg-gray-300" />
              
              <div className="flex flex-col md:flex-row gap-2 md:gap-8 items-start">
                <div className="w-48 shrink-0">
                  <span className="inline-block py-1 px-3 border border-white/20 rounded-full text-sm font-medium tracking-wide">
                    {item.time}
                  </span>
                </div>
                
                <div className="pt-1">
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-gray-300 transition-colors">
                    {item.title}
                  </h3>
                  {item.description && (
                    <p className="text-gray-400 leading-relaxed max-w-2xl text-lg">
                      {item.description}
                    </p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 pt-10 border-t border-white/10 flex justify-between items-center text-sm tracking-widest uppercase text-gray-500">
          <span>JANANI 2026</span>
          <Link href="/" className="hover:text-white transition-colors flex items-center gap-2">
            <span>Back to home</span>
            <span aria-hidden="true">↙</span>
          </Link>
        </div>
      </section>
    </main>
  );
}
