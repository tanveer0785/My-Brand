import React from "react";

const Contact = () => {
  return (
    <div className="bg-gray-50">

      {/* ================= HERO ================= */}
      <section className="bg-linear-to-r from-black to-gray-800 text-white py-20 px-6 text-center">
        <h1 className="text-5xl font-bold mb-4">Contact Us</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Have a question or project in mind? We’re here to help you grow your
          business with modern digital solutions.
        </p>
      </section>

      {/* ================= CONTACT SECTION ================= */}
      <section className="max-w-6xl mx-auto py-16 px-6 grid lg:grid-cols-2 gap-10">

        {/* LEFT SIDE INFO */}
        <div className="space-y-6">

          <h2 className="text-3xl font-bold text-gray-800">
            Get in Touch
          </h2>

          <p className="text-gray-600">
            We usually reply within 24 hours. Let’s build something amazing
            together.
          </p>

          {/* Cards */}
          <div className="space-y-4">

            <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
              <h3 className="font-semibold">📍 Address</h3>
              <p className="text-gray-600 text-sm">
                Shahodi Garhi, Punjab, Pakistan
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
              <h3 className="font-semibold">📞 Phone</h3>
              <p className="text-gray-600 text-sm">
                +92 300 0000000
              </p>
            </div>

            <div className="bg-white p-5 rounded-xl shadow hover:shadow-lg transition cursor-pointer">
              <h3 className="font-semibold">✉ Email</h3>
              <p className="text-gray-600 text-sm">
                support@yourcompany.com
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE FORM */}
        <div className="bg-white p-8 rounded-2xl shadow-lg">

          <h2 className="text-2xl font-bold mb-6">Send Message</h2>

          <form className="space-y-4">

            <input
              type="text"
              placeholder="Your Name"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="text"
              placeholder="Subject"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>

            <button
              type="submit"
              className="w-full bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition cursor-pointer"
            >
              Send Message
            </button>

          </form>

        </div>

      </section>

    {/* ================= MAP SECTION ================= */}
<section className="px-6 pb-16">
  <div className="max-w-6xl mx-auto rounded-2xl overflow-hidden shadow-lg">

    <iframe
      title="Sheikhupura Feroze Wattwan Map"
      src="https://www.google.com/maps?q=Feroze%20Wattwan%20Sheikhupura%20Punjab%20Pakistan&output=embed"
      width="100%"
      height="350"
      className="border-0"
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
    ></iframe>

  </div>
</section>
    </div>
  );
};

export default Contact;