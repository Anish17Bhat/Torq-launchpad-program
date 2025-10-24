const benefitsStudents = [
  "Gain practical, hands-on experience in innovation and prototyping.",
  "Learn to build a Business Model Canvas for real-world ideas.",
  "Master industry-relevant tools like CAD, Figma, and AI applications.",
  "Develop critical thinking, creativity, and problem-solving skills.",
  "Finish with a working prototype to showcase or launch as a startup.",
  "Get a chance to be featured in Ideabaaz show | Zee TV."
];

const benefitsCollege = [
  "Enhance your institution’s reputation for fostering innovation and entrepreneurship.",
  "Increase student engagement, employability, and placement opportunities.",
  "Foster a vibrant on-campus startup ecosystem.",
  "Attract industry partnerships, research opportunities, and recognition.",
  "Build stronger alumni connections through successful student ventures."
];

export default function Benefits() {
  return (
    <section className="w-full bg-black py-14 px-4 sm:px-8 md:px-16" id="benefits">
      <div className="flex flex-col md:flex-row justify-between items-start gap-12 md:gap-8">
        
        {/* Student Benefits */}
        <div className="w-full md:w-1/2 bg-[#232020] p-8 rounded-2xl shadow-[0_0_30px_rgba(251,201,0,0.15)] transition-transform hover:scale-[1.01]">
          <h2 className="text-[#FBC900] font-serif text-2xl sm:text-3xl font-bold underline underline-offset-4 decoration-2 decoration-[#FBC900] mb-8">
            BENEFITS TO STUDENTS
          </h2>
          <ul className="space-y-4">
            {benefitsStudents.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-white text-base sm:text-lg leading-relaxed"
              >
                <span className="text-[#FBC900] text-xl sm:text-2xl mt-[2px]">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* College Benefits */}
        <div className="w-full md:w-1/2 bg-[#232020] p-8 rounded-2xl shadow-[0_0_30px_rgba(251,201,0,0.15)] transition-transform hover:scale-[1.01]">
          <h2 className="text-[#FBC900] font-serif text-2xl sm:text-3xl font-bold underline underline-offset-4 decoration-2 decoration-[#FBC900] mb-8">
            BENEFITS TO COLLEGE
          </h2>
          <ul className="space-y-4">
            {benefitsCollege.map((item, idx) => (
              <li
                key={idx}
                className="flex items-start gap-3 text-white text-base sm:text-lg leading-relaxed"
              >
                <span className="text-[#FBC900] text-xl sm:text-2xl mt-[2px]">✔</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
