import { Link } from "react-router-dom";
import { Menu } from "lucide-react";

const Navbar = () => {
  return (

    <>
      {/* ================= NAVBAR ================= */}
      <nav className="fixed top-0 left-0 w-full z-50 bg-white/80 backdrop-blur-xl border-b border-gray-200 shadow-sm">

        <div className="max-w-7xl mx-auto px-6 md:px-12">

          <div className="flex items-center justify-between h-20">

            {/* LEFT LOGO */}
            <Link
              to="/"
              className="flex items-center gap-3"
            >

              <div className="w-11 h-11 rounded-2xl bg-[#1F3C3A] text-white flex items-center justify-center font-black text-xl shadow-lg">
                C
              </div>

              <div>
                <h1 className="text-2xl font-black text-[#1F3C3A] leading-none">
                  Charity.
                </h1>

                <span className="text-xs text-gray-400 font-medium tracking-wider uppercase">
                  NGO Foundation
                </span>
              </div>
            </Link>

            {/* CENTER LINKS */}
            <div className="hidden lg:flex items-center gap-10">

              {[
                ["Home", "/"],
                ["About-Us", "/about-us"],
                ["Project", "/project"],
                ["Blogs", "/blogs"],
                ["Contact-Us", "/contact"],
              ].map((item, i) => (

                <Link
                  key={i}
                  to={item[1]}
                  className="relative text-gray-700 font-semibold hover:text-[#1F3C3A] transition-all group"
                >
                  {item[0]}

                  <span className="absolute left-0 -bottom-2 w-0 h-[2px] bg-[#FFD66B] transition-all duration-300 group-hover:w-full"></span>
                </Link>
              ))}
            </div>

            {/* RIGHT BUTTON */}
            <div className="flex items-center gap-4">

              <Link
                to="/app-cohai"
                className="hidden md:flex bg-[#1F3C3A] text-white px-7 py-3 rounded-full font-bold hover:bg-[#FFD66B] hover:text-black transition-all duration-300 shadow-xl hover:scale-105"
              >
                Donate Now
              </Link>

              {/* MOBILE MENU */}
              <button className="lg:hidden w-11 h-11 rounded-xl border border-gray-200 flex items-center justify-center text-[#1F3C3A]">
                <Menu size={24} />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* NAVBAR SPACING */}
      <div className="h-20"></div>
    </>
  );
};

export default Navbar;