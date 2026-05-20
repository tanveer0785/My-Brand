// src/pages/Projects.jsx

import React from "react";
import {
  HeartHandshake,
  GraduationCap,
  HandHelping,
  ArrowRight,
  Users,
  Globe,
  Clock3,
} from "lucide-react";

const Projects = () => {
  // ================= PROJECT DATA =================
  const projects = [
    {
      id: 1,
      title: "Education Support",
      desc: "Providing books, school bags, uniforms, and scholarships for poor children.",
      image:
        "https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&w=1200&auto=format&fit=crop",
      raised: "$12,000",
      goal: "$15,000",
      progress: "80%",
      icon: <GraduationCap size={22} />,
    },
    {
      id: 2,
      title: "Food Donation",
      desc: "Distributing free food packages to needy families and homeless people.",
      image:
        "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop",
      raised: "$8,500",
      goal: "$10,000",
      progress: "70%",
      icon: <HandHelping size={22} />,
    },
    {
      id: 3,
      title: "Medical Camp",
      desc: "Free health checkups and medicines for underprivileged communities.",
      image:
        "https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=1200&auto=format&fit=crop",
      raised: "$18,000",
      goal: "$20,000",
      progress: "90%",
      icon: <HeartHandshake size={22} />,
    },
  ];

  return (
    <div className="bg-gray-50 min-h-screen cursor-pointer">
      {/* ================= HERO SECTION ================= */}
      <section className="bg-gradient-to-r from-black via-gray-900 to-black text-white py-24 px-6 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-5">
          Our Projects
        </h1>

        <p className="max-w-3xl mx-auto text-gray-300 text-lg">
          We are working on multiple charity projects to help poor families,
          children, and communities around the world.
        </p>

        <button className="mt-8 bg-white text-black px-7 py-3 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
          Explore Projects
        </button>
      </section>

      {/* ================= STATS SECTION ================= */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          
          <div className="bg-white p-8 rounded-3xl shadow-md text-center hover:shadow-2xl transition">
            <Users className="mx-auto mb-4 text-black" size={40} />
            <h2 className="text-4xl font-bold">12K+</h2>
            <p className="text-gray-500 mt-2">People Helped</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md text-center hover:shadow-2xl transition">
            <HeartHandshake className="mx-auto mb-4 text-black" size={40} />
            <h2 className="text-4xl font-bold">35+</h2>
            <p className="text-gray-500 mt-2">Active Campaigns</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md text-center hover:shadow-2xl transition">
            <Globe className="mx-auto mb-4 text-black" size={40} />
            <h2 className="text-4xl font-bold">20+</h2>
            <p className="text-gray-500 mt-2">Countries Reached</p>
          </div>

          <div className="bg-white p-8 rounded-3xl shadow-md text-center hover:shadow-2xl transition">
            <Clock3 className="mx-auto mb-4 text-black" size={40} />
            <h2 className="text-4xl font-bold">24/7</h2>
            <p className="text-gray-500 mt-2">Support Available</p>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS SECTION ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-bold mb-4">
              Featured Projects
            </h2>

            <p className="text-gray-600 max-w-2xl mx-auto">
              Our ongoing charity projects are changing lives through education,
              healthcare, food support, and community development.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition duration-300 group"
              >
                {/* IMAGE */}
                <div className="overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="h-64 w-full object-cover group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* CONTENT */}
                <div className="p-6">
                  <div className="flex items-center gap-3 mb-4 text-black">
                    <div className="bg-gray-100 p-3 rounded-full">
                      {project.icon}
                    </div>

                    <h3 className="text-2xl font-bold">
                      {project.title}
                    </h3>
                  </div>

                  <p className="text-gray-600 leading-relaxed mb-5">
                    {project.desc}
                  </p>

                  {/* PROGRESS */}
                  <div className="mb-4">
                    <div className="flex justify-between text-sm font-medium mb-2">
                      <span>Raised: {project.raised}</span>
                      <span>Goal: {project.goal}</span>
                    </div>

                    <div className="w-full h-3 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="bg-black h-3 rounded-full"
                        style={{ width: project.progress }}
                      ></div>
                    </div>
                  </div>

                  {/* BUTTON */}
                  <button className="mt-4 w-full bg-black text-white py-3 rounded-xl flex items-center justify-center gap-2 hover:bg-gray-800 transition">
                    Donate Now
                    <ArrowRight size={18} />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-black text-white py-20 px-6 text-center">
        <h2 className="text-4xl font-bold mb-5">
          Become Part of Our Mission
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 mb-8">
          Your small contribution can bring a big change in someone’s life.
          Join us today and support humanity.
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition">
          Start Donating
        </button>
      </section>
    </div>
  );
};

export default Projects;