import Landing from "./components/Landing";
import Highlights from "./components/Highlights";
import Timeline from "./components/Timeline";
import Benefits from "./components/Benefits";
import AboutUs from "./components/AboutUs";
import Contact from "./components/Contact";

const navLinks = [
  { name: "Highlights", href: "#highlights" },
  { name: "Timeline", href: "#timeline" },
  { name: "Benefits", href: "#benefits" },
  { name: "About", href: "#about" },
  { name: "Contact", href: "#contact" },
];

function App() {
  return (
    <>
          {/* Top Nav Bar */}
      <nav className="sticky top-0 z-20 bg-black bg-opacity-95 flex items-center justify-between px-4 py-3 border-b-4 border-[#FBC900] shadow-md">
        <div className="flex items-center">
          <img
            src="/logo.png"
            alt="Torq Logo"
            className="h-9 sm:h-10 mr-0 sm:mr-4 drop-shadow-[0px_2px_4px_rgba(251,201,0,0.4)]"
            loading="lazy"
          />
          <div className="bg-white px-3 sm:px-4 py-1 sm:py-2 rounded shadow font-extrabold text-xs sm:text-base text-black tracking-wide whitespace-nowrap">
            STRUCTURED INNOVATION
          </div>
        </div>
        <div className="hidden sm:flex gap-2 md:gap-4 ml-4">
          {navLinks.map(link => (
            <a
              key={link.name}
              href={link.href}
              className="px-3 py-1 rounded-md text-[#FBC900] font-semibold hover:bg-[#232020] transition-colors tracking-wide text-sm"
            >
              {link.name}
            </a>
          ))}
        </div>
        {/* Mobile nav toggle could be added here */}
      </nav>
      <Landing />
      <Highlights />
      <Timeline />
      <Benefits />
      <AboutUs />
      <Contact />
    </>
  );
}

export default App;
