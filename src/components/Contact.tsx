export default function Contact() {
  return (
    <section className="w-full bg-black py-14 px-4 sm:px-8" id="contact">
      {/* Top Section with BG */}
      <div
        className="relative w-full rounded-lg bg-cover bg-center flex flex-col items-center justify-center py-10"
        style={{ backgroundImage: "url('https://placehold.co/900x300/1a1a1a/ffe?text=Mech+BG')" }}
      >
        <h2 className="text-[#FBC900] font-serif text-3xl sm:text-4xl font-bold underline mb-8 pt-4 text-center">
          CONTACT INFORMATION
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10 w-full max-w-xl">
          <button
            className="flex-1 bg-[#2AA5F7] text-white font-semibold px-6 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition"
          >
            Login for Teachers
          </button>
          <button
            className="flex-1 bg-[#FF9000] text-white font-semibold px-6 py-4 rounded-full text-lg shadow-lg hover:scale-105 transition"
          >
            Login for Students
          </button>
        </div>
      </div>
      {/* Info + Partners */}
      <div className="flex flex-col md:flex-row justify-between items-center bg-[#232020] px-5 py-8 rounded-2xl mt-10 gap-10">
        {/* Contact Info */}
        <div className="space-y-5 text-base sm:text-lg w-full md:w-auto">
          <div className="flex items-center gap-3">
            <span className="text-[#FBC900] text-xl">☎</span>
            <span className="text-white">+91-9561047976</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#FBC900] text-xl">🌐</span>
            <span className="text-white">www.torqdesigns.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#FBC900] text-xl">✉</span>
            <span className="text-white">contact@torqdesigns.com</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="text-[#FBC900] text-xl">📍</span>
            <span className="text-white">
              Atal Block, NMAMIT Campus, Nitte, Karkala - 574110
            </span>
          </div>
        </div>
        {/* Partners */}
        <div className="mt-4 md:mt-0 flex flex-col">
          <div className="bg-white rounded-lg shadow-lg px-8 py-4 min-w-[230px]">
            <h4 className="text-black font-bold mb-2 text-center">Our Partners</h4>
            <div className="flex flex-wrap gap-3 justify-center">
              <span className="font-extrabold text-lg text-black px-2">KUBERANS</span>
              <span className="text-[#FBC900] border-2 border-black rounded px-2 py-1 font-bold">
                AIC NITTE
              </span>
              <span className="bg-[#FF9000] text-white px-3 py-1 rounded font-bold">
                IDEABAAZ&nbsp;DANGAL
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
