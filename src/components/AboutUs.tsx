import { RoadmapPanel } from "./RoadmapPanel";

export default function AboutAndRoadmap() {
  return (
    <section className="w-full bg-black py-14 px-4 sm:px-8 md:px-14 flex flex-col md:flex-row items-start gap-12 md:gap-24" id="about">
      
      {/* About Us text */}
      <div className="w-full md:w-3/5 max-w-3xl mx-auto">
        <h2 className="text-[#FBC900] font-serif text-3xl sm:text-4xl font-bold underline decoration-2 underline-offset-8 mb-8">
          ABOUT US
        </h2>
        <div className="text-white font-light text-lg leading-relaxed space-y-8">
          <p>
            We are a team of innovation catalysts empowering young engineers to think beyond textbooks and turn ideas into impactful products.
          </p>
          <p>
            At Torq Designs, we are a team of innovators specializing in product design and development. We help startups, researchers, and students turn their ideas into reality, transforming imagination into functional prototypes and real-world solutions. Our expertise spans diverse sectors, including agritech, biotech, healthcare, IT, automotive, and many more.
          </p>
          <p>
            Our initiatives inspire students to build confidence, develop entrepreneurial skills, and prepare them to become the innovators and leaders of tomorrow.
          </p>
        </div>
      </div>

      {/* Roadmap Side Panel */}
      <div className="w-full md:w-2/5 mt-8 md:mt-0 flex mx-auto justify-center">
        <RoadmapPanel />
      </div>
    </section>
  );
}
