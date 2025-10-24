const roadmapSteps = [
  {
    color: "#2AA5F7",
    label: "IDEATE",
    icon: "https://placehold.co/44x44/2AA5F7/fff?text=📝"
  },
  {
    color: "#45C266",
    label: "INNOVATE",
    icon: "https://placehold.co/44x44/45C266/fff?text=💡"
  },
  {
    color: "#FF9000",
    label: "PROTOTYPE",
    icon: "https://placehold.co/44x44/FF9000/fff?text=🤝"
  },
  {
    color: "#951ACB",
    label: "LAUNCH",
    icon: "https://placehold.co/44x44/951ACB/fff?text=🚀"
  },
];

export function RoadmapPanel() {
  return (
    <div className="w-full max-w-xs mx-auto md:mx-0">
      <h3 className="text-[#FBC900] text-lg sm:text-xl font-serif font-extrabold mb-6 tracking-wide text-center border-b-2 border-[#FBC900] pb-2">
        YOUR ROADMAP<br className="hidden sm:block" /> TO IMPACT
      </h3>
      <div className="flex flex-col gap-5">
        {roadmapSteps.map((step, idx) => (
          <div
            key={step.label}
            className="flex items-center relative rounded-[2rem] pr-4 shadow-xl"
            style={{
              background: step.color,
              minHeight: 64,
              boxShadow: `0 4px 24px ${step.color}44`,
            }}
          >
            <div
              className="absolute -left-7 w-16 h-16 rounded-full flex items-center justify-center shadow-lg"
              style={{
                background: step.color,
                zIndex: 1,
                top: "50%",
                transform: "translateY(-50%)",
              }}
            >
              <img src={step.icon} alt="" className="w-11 h-11" />
            </div>
            <span className="flex-1 text-white font-bold text-lg sm:text-xl ml-12 select-none">{step.label}</span>
            <span className="text-white ml-2 text-xl font-bold">✔</span>
          </div>
        ))}
      </div>
    </div>
  );
}
