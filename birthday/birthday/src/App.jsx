import image1 from "./assets/images/birthdaypic1.jpg"
import image2 from "./assets/images/bpic3.jpg"
import image3 from "./assets/images/bpic4.jpg"
import image4 from "./assets/images/bpic5.jpg"
import image5 from "./assets/images/bpic6.jpg"
import image6 from "./assets/images/bpic7.jpg"
import image7 from "./assets/images/bpic8.jpg"
import image8 from "./assets/images/bpic9.jpg"
import image9 from "./assets/images/bpic10.jpg"
import image10 from "./assets/images/bpic11.jpg"
import image11 from "./assets/images/bpic12.jpg"
import image12 from "./assets/images/bpic13.jpg"
import image13 from "./assets/images/bpic14.jpg"
export default function HappyBirthdayWebsite() {
  const memories = [
    { src: image6, span: "md:col-span-4 md:row-span-2", label: "Shags" },
    { src: image5, span: "md:col-span-8 md:row-span-1", label: "Mang'u" },
    { src: image4, span: "md:col-span-4 md:row-span-1", label: "Home" },
    { src: image3, span: "md:col-span-4 md:row-span-1", label: "Elephant Hills" },
    { src: image2, span: "md:col-span-5 md:row-span-1", label: "Elephant Hills" },
    { src: image7, span: "md:col-span-3 md:row-span-2", label: "View Point - Rift Valley" },
    { src: image8, span: "md:col-span-4 md:row-span-1", label: "Mang'u" },
    { src: image9, span: "md:col-span-9 md:row-span-1", label: "Diani" },
    { src: image10, span: "md:col-span-3 md:row-span-1", label: "Kirimara" },
    { src: image11, span: "md:col-span-4 md:row-span-2", label: "Shags" },
    { src: image12, span: "md:col-span-4 md:row-span-1", label: "Alliance"},
    { src: image13, span: "md:col-span-4 md:row-span-1", label: "Home" },
    ];
 
  return (
     <div className="min-h-screen bg-[#0a0a0c] font-sans selection:bg-amber-200 selection:text-black">
      
      {/* HERO SECTION */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        
        {/* Dynamic Background */}
        <div className="absolute inset-0">
          <img
            src={image2}
            className="w-full h-full object-cover opacity-30 scale-105"
            alt="Background"
          />
          {/* Elegant Gradient Overlays */}
          <div className="absolute inset-0 bg-radial-at-t from-transparent via-[#0a0a0c]/60 to-[#0a0a0c]" />
          <div className="absolute inset-0 bg-linear-to-b from-transparent to-[#0a0a0c]" />
        </div>

        {/* Content Container */}
        <div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col items-center text-center">

          <h1 className="text-4xl md:text-6xl text-white font-light tracking-tight mb-2">
            Happy 46<sup className="text-xl md:text-2xl">th</sup>
          </h1>

          <h2
            className="text-[8rem] md:text-[14rem] leading-[0.8] text-transparent bg-clip-text bg-linear-to-b from-amber-200 via-amber-500 to-amber-700"
            style={{ fontFamily: "'Tangerine', cursive" }}
          >
            Dad
          </h2>

          <p className="mt-12 text-slate-400 text-lg md:text-xl max-w-2xl leading-relaxed font-light">
            Celebrating the flourishing wisdom and the strength that anchors our family together. 
            Thank you for being our guide, our mentor, and a good friend.
            Happy, happy birthday dad!
          </p>
        </div>

      </section>

      {/* GAPLESS MASONRY GRID */}
      <section className="pb-24 px-4 md:px-8 max-w-[1600px] mx-auto">
        <div className="mb-12 flex items-center justify-between">
            <h2 className="text-4xl md:text-6xl text-white font-light" style={{ fontFamily: "'Tangerine', cursive" }}>
                Memories
            </h2>
            <span className="text-[10px] tracking-widest uppercase text-slate-500 hidden md:block">
                Sweet recent memories together as a family &bull; 
            </span>
        </div>

        {/* The "Columns" approach ensures no vertical or horizontal gaps */}
        <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-4 space-y-4">
          {memories.map((photo, index) => (
            <div 
              key={index} 
              className="relative break-inside-avoid group overflow-hidden rounded-2xl bg-slate-900 border border-white/5"
            >
              <img 
                src={photo.src} 
                alt={photo.label} 
                className={`w-full object-cover transition-all duration-700 group-hover:scale-105 opacity-80 group-hover:opacity-100`}
              />
              
              {/* Minimalist Overlay */}
              <div className="absolute inset-0 bg-linear-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex items-end p-6">
                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <p className="text-amber-500 text-[10px] tracking-[0.3em] uppercase font-bold mb-1">
                        Photo {index + 1}
                    </p>
                    <p className="text-white text-lg font-light tracking-wide italic">
                        {photo.label}
                    </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
      

      {/* QUOTE SECTION */}
      <section className="bg-[#0f0f12] py-40">
        <div className="max-w-4xl mx-auto px-6 text-center">
            <span className="text-5xl text-amber-500/30 font-serif leading-none">“</span>
            <p className="text-2xl md:text-4xl text-slate-200 font-light leading-snug tracking-tight italic">
                As you celebrate your 46 <sup>th</sup> birthday, for every lesson taught, every sacrifice made, and every dream encouraged — 
                thank you for being the foundation of it all. God bless you 
            </p>
            <div className="mt-12 h-px w-20 bg-amber-600 mx-auto" />
            <h4 className="mt-8 text-4xl text-amber-500" style={{ fontFamily: "'Tangerine', cursive" }}>With Love, from family</h4>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="py-12 text-center text-slate-600 text-sm tracking-widest uppercase">
        <p>&copy; 2026 &bull; Crafted with heart for Dad</p>
      </footer>

    </div>
      
  );

}
