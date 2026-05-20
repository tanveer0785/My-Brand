const Footer = () => {
  return (

    <>
      {/* ================= FOOTER ================= */}
      <footer className="bg-[#111827] text-white py-20">

        <div className="max-w-7xl mx-auto px-6 md:px-16">

          <div className="grid md:grid-cols-4 gap-12">

            {/* LOGO */}
            <div>
              <h2 className="text-3xl font-black text-[#FFD66B]">
                Charity.
              </h2>

              <p className="text-gray-400 mt-5 leading-relaxed">
                Helping communities with education,
                healthcare and food support worldwide.
              </p>
            </div>

            {/* LINKS */}
            <div>
              <h3 className="font-bold text-xl mb-5">
                Quick Links
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-[#FFD66B] cursor-pointer transition-all">
                  Home
                </li>

                <li className="hover:text-[#FFD66B] cursor-pointer transition-all">
                  About
                </li>

                <li className="hover:text-[#FFD66B] cursor-pointer transition-all">
                  Services
                </li>
                <li className="hover:text-[#FFD66B] cursor-pointer transition-all">
                  Blogs
                </li>

                <li className="hover:text-[#FFD66B] cursor-pointer transition-all">
                  Contact
                </li>
              </ul>
            </div>

            {/* SUPPORT */}
            <div>
              <h3 className="font-bold text-xl mb-5">
                Support
              </h3>

              <ul className="space-y-3 text-gray-400">
                <li className="hover:text-[#FFD66B] cursor-pointer transition-all">
                  Donate
                </li>

                <li className="hover:text-[#FFD66B] cursor-pointer transition-all">
                  Volunteer
                </li>

                <li className="hover:text-[#FFD66B] cursor-pointer transition-all">
                  Privacy Policy
                </li>

                <li className="hover:text-[#FFD66B] cursor-pointer transition-all">
                  Terms & Conditions
                </li>
              </ul>
            </div>

            {/* NEWSLETTER */}
            <div>

              <h3 className="font-bold text-xl mb-5">
                Newsletter
              </h3>

              <div className="flex">

                <input
                  type="email"
                  placeholder="Your Email"
                  className="w-full px-4 py-4 rounded-l-2xl bg-white/10 border border-white/10 outline-none"
                />

                <button className="bg-[#FFD66B] text-black px-6 rounded-r-2xl font-bold">
                  Join
                </button>
              </div>
            </div>
          </div>

          {/* COPYRIGHT */}
          <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
            © 2026 Charity. TANVEER HUSAIN.
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;