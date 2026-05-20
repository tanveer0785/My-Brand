// src/pages/About.jsx

import React from "react";
import {
  HeartHandshake,
  Users,
  Globe2,
  Target,
  ShieldCheck,
  HandHeart,
} from "lucide-react";

const About = () => {
  return (
    <div className="bg-white text-gray-800 cursor-pointer">

      {/* ================= HERO SECTION ================= */}
      <section className="relative bg-gradient-to-r from-black via-gray-900 to-black text-white py-24 px-6 overflow-hidden">
        
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">

          {/* LEFT CONTENT */}
          <div>
            <p className="uppercase tracking-[5px] text-gray-300 mb-4">
              About Our Charity
            </p>

            <h1 className="text-5xl md:text-6xl font-bold leading-tight mb-6">
              Together We Can Change Lives
            </h1>

            <p className="text-gray-300 text-lg leading-relaxed mb-8">
              Our charity organization is dedicated to helping poor families,
              supporting children's education, providing food assistance, and
              improving healthcare services for communities in need.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-white text-black px-7 py-3 rounded-full font-semibold hover:bg-gray-200 transition">
                Donate Now
              </button>

              <button className="border border-white px-7 py-3 rounded-full hover:bg-white hover:text-black transition">
                Learn More
              </button>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative">
            <img
              src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&w=1200&auto=format&fit=crop"
              alt="Charity"
              className="rounded-3xl shadow-2xl h-[500px] w-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* ================= ABOUT SECTION ================= */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

          {/* IMAGE */}
          <div>
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1200&auto=format&fit=crop"
              alt="Helping People"
              className="rounded-3xl shadow-xl"
            />
          </div>

          {/* CONTENT */}
          <div>
            <p className="text-black font-semibold uppercase tracking-[4px] mb-3">
              Who We Are
            </p>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Helping Humanity Through Kindness
            </h2>

            <p className="text-gray-600 leading-relaxed mb-6">
              We believe every person deserves access to food, education,
              healthcare, and a better future. Our mission is to support
              underprivileged communities through donations and volunteer work.
            </p>

            <p className="text-gray-600 leading-relaxed mb-8">
              With the help of generous donors and volunteers, we continue to
              create positive change and bring hope to thousands of lives.
            </p>

            {/* FEATURES */}
            <div className="grid sm:grid-cols-2 gap-5">

              <div className="flex gap-4 bg-gray-100 p-5 rounded-2xl">
                <HeartHandshake className="text-black mt-1" />
                <div>
                  <h4 className="font-bold text-lg">
                    Compassion
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Caring for every individual with love and respect.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-gray-100 p-5 rounded-2xl">
                <ShieldCheck className="text-black mt-1" />
                <div>
                  <h4 className="font-bold text-lg">
                    Transparency
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Honest and trusted charity management system.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-gray-100 p-5 rounded-2xl">
                <Users className="text-black mt-1" />
                <div>
                  <h4 className="font-bold text-lg">
                    Community
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Building stronger communities together.
                  </p>
                </div>
              </div>

              <div className="flex gap-4 bg-gray-100 p-5 rounded-2xl">
                <HandHeart className="text-black mt-1" />
                <div>
                  <h4 className="font-bold text-lg">
                    Support
                  </h4>
                  <p className="text-gray-600 text-sm">
                    Helping families in difficult situations.
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ================= MISSION & VISION ================= */}
      <section className="bg-gray-100 py-24 px-6">
        <div className="max-w-7xl mx-auto">

          <div className="text-center mb-16">
            <p className="uppercase tracking-[4px] text-black font-semibold mb-3">
              Our Purpose
            </p>

            <h2 className="text-5xl font-bold">
              Mission & Vision
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-8">

            {/* MISSION */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <Target size={50} className="mb-6 text-black" />

              <h3 className="text-3xl font-bold mb-4">
                Our Mission
              </h3>

              <p className="text-gray-600 leading-relaxed">
                Our mission is to provide support, hope, and opportunities to
                people living in poverty through food programs, education,
                healthcare, and community development.
              </p>
            </div>

            {/* VISION */}
            <div className="bg-white p-10 rounded-3xl shadow-lg hover:shadow-2xl transition">
              <Globe2 size={50} className="mb-6 text-black" />

              <h3 className="text-3xl font-bold mb-4">
                Our Vision
              </h3>

              <p className="text-gray-600 leading-relaxed">
                We envision a world where every child has education, every
                family has food, and every community has access to basic human
                needs and opportunities.
              </p>
            </div>

          </div>
        </div>
      </section>

      {/* ================= CTA SECTION ================= */}
      <section className="bg-black text-white py-24 px-6 text-center">
        <h2 className="text-5xl font-bold mb-6">
          Join Our Charity Mission
        </h2>

        <p className="max-w-2xl mx-auto text-gray-300 text-lg mb-8">
          Your donation and support can help us bring happiness and hope to
          people who need it most.
        </p>

        <button className="bg-white text-black px-8 py-4 rounded-full font-semibold hover:bg-gray-200 transition">
          Become a Donor
        </button>
      </section>
    </div>
  );
};

export default About;