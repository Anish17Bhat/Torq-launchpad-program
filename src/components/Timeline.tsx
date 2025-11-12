import img from '../assets/timeline.jpg'

const timeline = [
  { week: "Week 1", activity: "Offline kick-off, idea generation, team formation" },
  { week: "Week 2", activity: "Online: design thinking, business model" },
  { week: "Week 3", activity: "Offline prototyping, online: AI, GTM, finance, IP" },
  { week: "Week 4", activity: "Pitch prep & final demo day" }
];

export default function Timeline() {
  return (
    <section className="w-full bg-black py-16 px-2 sm:px-6 flex flex-col md:flex-row" id="timeline">
      {/* Left: Table */}
      <div className="w-full md:w-2/3 max-w-3xl pr-0 md:pr-8 mx-auto">
        <h2 className="text-[#FBC900] font-serif text-3xl font-bold underline mb-7">PROGRAM TIMELINE</h2>
        <div className="rounded-xl overflow-hidden shadow-lg">
          <table className="w-full min-w-[330px] bg-[#232020] border-separate">
            <thead>
              <tr>
                <th className="bg-[#FBC900] text-black px-6 py-3 text-lg font-bold border-b-2 border-black tracking-wide">
                  Day/Week
                </th>
                <th className="bg-[#FBC900] text-black px-6 py-3 text-lg font-bold border-b-2 border-black tracking-wide">
                  Activity
                </th>
              </tr>
            </thead>
            <tbody>
              {timeline.map((row) => (
                <tr key={row.week}>
                  <td className="px-6 py-4 border-b border-[#393939] text-white font-medium">{row.week}</td>
                  <td className="px-6 py-4 border-b border-[#393939] text-white">{row.activity}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      {/* Right: Who Can Join */}
      <div className="w-full md:w-1/3 mt-10 md:mt-0 md:pl-8 flex flex-col items-center">
        <h3 className="text-[#FBC900] font-serif text-2xl font-bold mb-2">WHO CAN JOIN?</h3>
        <div className="bg-white p-5 rounded-xl shadow-lg flex flex-col items-center w-[240px]">
          <span className="text-black text-base mb-2 text-center">
            Engineering students (any branch), up to 80 participants passionate about innovation and prototyping.
          </span>
          <img src={img} alt="Who Can Join" className="rounded-lg mt-3 drop-shadow"/>
        </div>
      </div>
    </section>
  );
}
