import img from '../assets/highlights_img.jpg'
import h1 from '../assets/handson_img.png'
import h2 from '../assets/highlights2.png'
import h3 from '../assets/highlights3.png'
import h4 from '../assets/highlights4.png'
import h5 from '../assets/highlights5.png'

const highlights = [
    { label: "Hands-On Innovation Experience", icon: h1 },
    { label: "Master Industry-Relevant Tools", icon: h2 },
    { label: "Build Business Model Skills", icon: h3 },
    { label: "Expert Mentorship Support", icon: h4},
    { label: "Create Startup-Ready Prototypes", icon: h5 },
];

export default function Highlights() {
    return (
        <div id="highlights">
        <h2 className="text-[#FBC900] bg-black font-serif text-3xl font-bold underline text-center">HIGHLIGHTS</h2> 
        <section className="w-full bg-black flex flex-col md:flex-row justify-between py-16 px-0 md:px-8">
            <div className="flex-grow bg-[#232020] rounded-l-3xl shadow-lg max-w-3xl mx-auto md:mx-0">

                {highlights.map((h, idx) => (
                    <div key={h.label} className={`flex items-center justify-between ${idx < highlights.length - 1 ? 'border-b border-[#393939]' : ''
                        } px-8 py-7`}>
                        <span className="text-white font-medium text-lg tracking-wide">{h.label}</span>
                        <div className="flex flex-row items-center justify-center">
                            <div
                                className="rounded-lg bg-[#FBC900] flex items-center justify-center shadow-md"
                                style={{
                                    width: 54,
                                    height: 54,
                                    marginLeft: 32,
                                    boxShadow: "0 3px 16px #fde47f60"
                                }}
                            >
                                <img src={h.icon} alt="" className="w-10 h-10" />
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            {/* Right: Circle student image (hidden on mobile) */}
            <div className="hidden md:flex items-center ml-10">
                <div
                    className="rounded-full shadow-2xl w-72 h-72 flex items-center justify-center overflow-hidden"
                    style={{ border: "12px solid #FBC900", background: "rgba(251,201,0,.09)" }}
                >
                    <img
                        src={img}
                        alt="Students"
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </section>
    </div>
    );
}
