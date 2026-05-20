import React from "react";
import {
  Play,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";

const Home = () => {

  // ================= DONATION DATA =================
  const causes = [
    {
      id: 1,
      title: "Help for Education",
      desc: "Providing school kits and books to children in underprivileged areas.",
      raised: "$12,000",
      goal: "$15,000",
      progress: "80%",
      img: "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=500&q=80",
      category: "Education",
    },
    {
      id: 2,
      title: "Clean Water for Africa",
      desc: "Building sustainable water wells for clean drinking water access.",
      raised: "$8,500",
      goal: "$10,000",
      progress: "65%",
      img: "https://africa-on-air.com/wp-content/uploads/2022/07/BEI-AFRIQUE-EAU-1-768x440.jpg-768x440.webp",
      category: "Water",
    },
    {
      id: 3,
      title: "Healthy Food Supply",
      desc: "Ensuring no child goes to sleep hungry by providing monthly rations.",
      raised: "$5,000",
      goal: "$20,000",
      progress: "25%",
      img: "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=500&q=80",
      category: "Food",
    },
  ];

  return (
    <div className="min-h-screen bg-[#FDFCF7] font-sans text-[#1A2B2A] overflow-hidden cursor-pointer">

      {/* ================= HERO SECTION ================= */}
      <section className="max-w-7xl mx-auto px-6 md:px-16 grid grid-cols-1 lg:grid-cols-2 gap-16 pt-16 pb-24 items-center">

        {/* LEFT */}
        <div className="space-y-8">

          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#E8F0EE] rounded-full text-[#3D5A58] font-bold text-xs md:text-sm">
            <span className="w-2 h-2 bg-[#3D5A58] rounded-full animate-pulse"></span>
            Help The People In Need
          </div>

          <h1 className="text-5xl md:text-7xl font-extrabold leading-[1.1] text-[#1A2B2A]">
            Give a Helping <br />
            <span className="text-[#3D5A58]">Hand </span>
            <span className="relative inline-block">
              to Those
              <svg
                className="absolute -bottom-2 left-0 w-full h-3 text-[#FFD66B]"
                viewBox="0 0 100 10"
                preserveAspectRatio="none"
              >
                <path
                  d="M0 5 Q 25 0, 50 5 T 100 5"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="4"
                />
              </svg>
            </span>
          </h1>

          <p className="text-lg text-gray-500 max-w-lg leading-relaxed">
            Your small contribution can make a big difference in someone's
            life. Join us in our mission to bring smiles and hope to the
            underprivileged.
          </p>

          <div className="flex flex-wrap items-center gap-6">
            {/* ADDED cursor-pointer */}
            <button className="bg-[#3D5A58] text-white px-10 py-5 rounded-full font-bold text-lg hover:bg-[#2A3E3C] transition-all flex items-center gap-3 group shadow-xl cursor-pointer">
              Donate Now
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </button>

            {/* ADDED cursor-pointer */}
            <button className="flex items-center gap-4 group cursor-pointer">
              <div className="w-14 h-14 rounded-full border-2 border-gray-200 flex items-center justify-center bg-white shadow-sm group-hover:border-[#3D5A58] transition-all">
                <Play
                  className="fill-[#3D5A58] text-[#3D5A58]"
                  size={20}
                />
              </div>
              <span className="font-bold text-gray-700">
                Watch Video
              </span>
            </button>
          </div>

          <div className="pt-8 flex gap-12 border-t border-gray-200/50">
            <div>
              <span className="text-3xl font-black block">25k+</span>
              <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                Global Partners
              </span>
            </div>
            <div>
              <span className="text-3xl font-black block">120k+</span>
              <span className="text-sm text-gray-400 font-medium uppercase tracking-wider">
                Donations Made
              </span>
            </div>
          </div>
        </div>

        {/* RIGHT */}
        <div className="relative">
          <div className="relative z-10 rounded-[3.5rem] overflow-hidden border-[12px] border-white shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80"
              alt="People helping"
              className="w-full h-[600px] object-cover"
            />
          </div>

          <div className="absolute -left-12 bottom-24 z-20 bg-white p-5 rounded-3xl shadow-xl hidden md:flex items-center gap-4">
            <div className="w-14 h-14 bg-green-100 rounded-2xl flex items-center justify-center text-green-600">
              <CheckCircle2 size={30} />
            </div>
            <div>
              <p className="text-sm font-black uppercase text-gray-400">
                Trust Score
              </p>
              <p className="text-lg font-bold text-gray-800 tracking-tight">
                100% Reliable
              </p>
            </div>
          </div>

          <div className="absolute -right-8 top-16 z-20 bg-[#FFD66B] p-6 rounded-[2rem] shadow-xl rotate-6 hover:rotate-0 transition-transform">
            <div className="flex -space-x-3 mb-4">
              {[1, 2, 3, 4].map((i) => (
                <img
                  key={i}
                  className="w-10 h-10 rounded-full border-4 border-[#FFD66B]"
                  src={`https://i.pravatar.cc/100?img=${i + 20}`}
                  alt=""
                />
              ))}
            </div>
            <p className="text-sm font-black text-black leading-tight">
              Join 12k+
              <br />
              Volunteers
            </p>
          </div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[115%] h-[115%] border border-dashed border-gray-200 rounded-full opacity-60"></div>
        </div>
      </section>

      {/* ================= FEATURES SECTION ================= */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              { num: "01", title: "Healthy Food", desc: "Providing nutritious meals to children in remote areas." },
              { num: "02", title: "Clean Water", desc: "Ensuring safe and filtered drinking water for villages." },
              { num: "03", title: "Medical Aid", desc: "Emergency medical support and free healthcare checkups." },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="group hover:-translate-y-2 transition-all duration-500 cursor-default"
              >
                <div className="text-5xl font-black text-gray-100 group-hover:text-[#3D5A58]/10 transition-colors mb-4">
                  {feature.num}
                </div>
                <h3 className="text-2xl font-bold mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-500 leading-relaxed">
                  {feature.desc}
                </p>
                <div className="w-10 h-1 bg-[#FFD66B] mt-6 group-hover:w-20 transition-all"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= IMPACT SECTION ================= */}
      <section className="py-28 bg-[#1F3C3A] text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFD66B]/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-6 md:px-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="relative">
              <img
                src="https://images.unsplash.com/photo-1524069290683-0457abfe42c3?auto=format&fit=crop&w=800&q=80"
                alt=""
                className="rounded-[3rem] shadow-2xl w-full h-[600px] object-cover"
              />
              <div className="absolute -bottom-10 -right-10 bg-[#FFD66B] text-black p-8 rounded-[2rem] shadow-xl">
                <h3 className="text-5xl font-black">15+</h3>
                <p className="font-bold mt-2">Years of Helping</p>
              </div>
            </div>

            <div>
              <span className="uppercase tracking-[4px] text-[#FFD66B] font-bold text-sm">Our Impact</span>
              <h2 className="text-5xl md:text-6xl font-black leading-tight mt-6">
                Small Help Can <br /> Change Lives Forever
              </h2>
              <p className="text-gray-300 text-lg leading-relaxed mt-8">
                Every donation helps us provide food, education, healthcare and shelter to thousands of people around the world.
              </p>
              <div className="grid grid-cols-2 gap-8 mt-12">
                {[
                  ["120K+", "People Helped"],
                  ["35+", "Countries"],
                  ["500+", "Volunteers"],
                  ["98%", "Success Rate"],
                ].map((item, i) => (
                  <div key={i} className="bg-white/5 border border-white/10 p-6 rounded-3xl backdrop-blur-xl">
                    <h3 className="text-4xl font-black text-[#FFD66B]">{item[0]}</h3>
                    <p className="text-gray-300 mt-2">{item[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= DONATION SECTION ================= */}
      <section className="bg-[#FDFCF7] py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <div>
              <h4 className="text-[#3D5A58] font-bold tracking-widest uppercase text-sm mb-4">Latest Causes</h4>
              <h2 className="text-4xl md:text-5xl font-black">Find Popular Causes</h2>
            </div>
            {/* ADDED cursor-pointer */}
            <button className="text-[#3D5A58] font-bold border-b-2 border-[#3D5A58] pb-1 hover:text-orange-500 hover:border-orange-500 transition-all cursor-pointer">
              View All Causes
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
            {causes.map((cause) => (
              <div
                key={cause.id}
                className="bg-white rounded-[2.5rem] overflow-hidden shadow-sm hover:shadow-2xl transition-all duration-500 border border-gray-100 group"
              >
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={cause.img}
                    alt={cause.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-5 left-5 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded-full text-xs font-bold text-[#3D5A58]">
                    {cause.category}
                  </div>
                </div>

                <div className="p-8 space-y-6">
                  <h3 className="text-2xl font-bold group-hover:text-[#3D5A58] transition-colors">
                    {cause.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {cause.desc}
                  </p>
                  <div className="space-y-3">
                    <div className="flex justify-between text-sm font-bold">
                      <span className="text-gray-400">Raised: <span className="text-[#1A2B2A] ml-1">{cause.raised}</span></span>
                      <span className="text-[#3D5A58]">{cause.progress}</span>
                    </div>
                    <div className="w-full h-2 bg-gray-200 rounded-full overflow-hidden">
                      <div className="h-full bg-[#3D5A58] rounded-full" style={{ width: cause.progress }}></div>
                    </div>
                    <div className="text-sm font-bold text-gray-400">Goal: <span className="text-[#1A2B2A] ml-1">{cause.goal}</span></div>
                  </div>
                  {/* ADDED cursor-pointer */}
                  <button className="w-full py-4 rounded-2xl border-2 border-[#3D5A58] text-[#3D5A58] font-bold hover:bg-[#3D5A58] hover:text-white transition-all cursor-pointer">
                    Donate Now
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= GALLERY SECTION ================= */}
      <section className="py-28 bg-white">
        <div className="max-w-7xl mx-auto px-6 md:px-16">
          <div className="text-center mb-20">
            <span className="uppercase tracking-[4px] text-[#1F3C3A] font-bold text-sm">Our Gallery</span>
            <h2 className="text-5xl font-black mt-5">Moments of Hope</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              "https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1497486751825-1233686d5d80?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80",
              "https://images.unsplash.com/photo-1509099836639-18ba1795216d?auto=format&fit=crop&w=800&q=80",
            ].map((img, i) => (
              <div
                key={i}
                className="overflow-hidden rounded-[2rem] group h-[350px]"
              >
                <img
                  src={img}
                  alt=""
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-700"
                />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="py-24 bg-[#FFD66B]">
        <div className="max-w-5xl mx-auto text-center px-6">
          <h2 className="text-5xl md:text-6xl font-black text-[#111827] leading-tight">
            Become a Part <br /> of the Change
          </h2>
          <p className="mt-8 text-lg text-gray-700 leading-relaxed">
            Join thousands of volunteers and donors helping communities live better lives every day.
          </p>
          <div className="flex flex-wrap justify-center gap-6 mt-10">
            {/* ADDED cursor-pointer */}
            <button className="bg-[#111827] text-white px-10 py-5 rounded-full font-bold hover:scale-105 transition-all cursor-pointer">
              Donate Now
            </button>
            {/* ADDED cursor-pointer */}
            <button className="border-2 border-[#111827] text-[#111827] px-10 py-5 rounded-full font-bold hover:bg-[#111827] hover:text-white transition-all cursor-pointer">
              Become Volunteer
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;