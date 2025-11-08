import img1 from '../assets/structured_innovation.webp';

export default function Landing() {
  return (
    <section className="w-full min-h-screen bg-black flex flex-col">
      {/* Hero Content */}
      <div className="flex flex-col md:flex-row items-center justify-between px-4 sm:px-8 md:px-14 py-12 relative bg-gradient-to-bl from-black via-[#28220d] to-[#FBC900]/20">
        {/* Circle Image */}
        <div className="w-full md:w-1/2 flex justify-center md:justify-end mb-10 md:mb-0">
          <div
            className="rounded-full overflow-hidden w-56 h-56 sm:w-64 sm:h-64 md:w-72 md:h-72 flex items-center justify-center shadow-[0_0_60px_0_rgba(251,201,0,0.35)]"
            style={{ border: "10px solid #FBC900", background: "rgba(251,201,0,0.1)" }}
          >
            <img
              src={img1}
              alt="Lab visual"
              className="object-cover w-full h-full"
            />
          </div>
        </div>

        {/* Titles and Text */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1
            className="font-serif leading-tight mb-2 text-[2.2rem] sm:text-[2.7rem] md:text-[3rem] font-bold"
            style={{ color: "#FBC900", textShadow: "0 2px 18px #1a170540" }}
          >
            Structured<br />Innovation
          </h1>
          <span
            className="px-5 sm:px-7 py-2 mt-2 mb-6 rounded-lg font-semibold text-base sm:text-lg shadow"
            style={{
              background: "#FBC900",
              color: "#1A1814",
              boxShadow: "0 3px 14px #fde47f60",
            }}
          >
            Launchpad Program
          </span>
          <p className="text-white text-base sm:text-lg md:text-xl leading-relaxed mb-8 max-w-md font-light">
            Empowering Students to Build the Future of Infinite Innovation.
          </p>
          {/* Yellow angled quote — visible md + only */}
          <div
            className="hidden md:block absolute right-0 top-20 text-black font-semibold shadow-lg"
            style={{
              background: "#FBC900",
              padding: "2.3rem 2.1rem",
              borderRadius: "2.3rem 0 3.2rem 2rem",
              width: 280,
              transform: "rotate(7deg)",
              boxShadow: "0 7px 34px #fbc9003a",
            }}
          >
            <p className="leading-snug text-base font-semibold">
              Let’s collaborate to<br />
              create meaningful,<br />
              modern innovations<br />
              for the future.
            </p>
          </div>
        </div>
      </div>

      {/* Powered‑By Section */}
      <div className="bg-[#FBC900] py-6 border-t-4 border-black flex flex-col items-center text-center">
        <h2 className="text-black font-extrabold text-lg sm:text-xl tracking-widest mb-3">
          POWERED BY
        </h2>
        <div className="flex flex-wrap justify-center items-center gap-5 sm:gap-8 w-full px-4">
          <img
            src="https://placehold.co/100x40/fff/232020?text=EXPERIMIND"
            className="h-10 sm:h-12 rounded bg-white shadow-md hover:scale-105 transition-transform"
            alt="experimind"
          />
          <img
            src="https://placehold.co/100x40/fff/232020?text=COGNIMUSE"
            className="h-10 sm:h-12 rounded bg-white shadow-md hover:scale-105 transition-transform"
            alt="cognimuse"
          />
          <img
            src="https://placehold.co/100x40/fff/232020?text=SINGULARITY"
            className="h-10 sm:h-12 rounded bg-white shadow-md hover:scale-105 transition-transform"
            alt="singularity"
          />
        </div>
      </div>
    </section>
  );
}
