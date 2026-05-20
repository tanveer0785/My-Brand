import React, { useState } from "react";

const allBlogs = [
  {
    title: "Modern Web Design Trends 2026",
    desc: "Explore the latest UI/UX trends shaping modern websites.",
    image:
      "https://bdthemes.com/wp-content/uploads/2026/01/Modern-Blog-Layout-Design-for-2026.jpg",
    category: "Design",
  },
  {
    title: "How to Build Fast React Apps",
    desc: "Performance tips for modern React applications.",
    image:
      "https://images.unsplash.com/photo-1555066931-4365d14bab8c",
    category: "Development",
  },
  {
    title: "SEO Strategy 2026 Guide",
    desc: "Improve ranking with modern SEO techniques.",
    image:
      "https://images.unsplash.com/photo-1562577309-4932fdd64cd1",
    category: "SEO",
  },
  {
    title: "Creative Branding Ideas",
    desc: "Unique branding strategies for modern businesses.",
    image:
      "https://images.unsplash.com/photo-1526498460520-4c246339dccb",
    category: "Design",
  },
];

const Blogs = () => {
  const [search, setSearch] = useState("");
  const [filter, setFilter] = useState("All");

  const filteredBlogs = allBlogs.filter((blog) => {
    return (
      (filter === "All" || blog.category === filter) &&
      blog.title.toLowerCase().includes(search.toLowerCase())
    );
  });

  return (
    <div className="bg-gray-50 min-h-screen">

      {/* HERO */}
      <section className="bg-gradient-to-r from-black to-gray-800 text-white py-20 text-center px-6">
        <h1 className="text-5xl font-bold mb-4">Our Blogs</h1>
        <p className="text-gray-300 max-w-2xl mx-auto">
          Insights about web development, SEO, design and digital growth.
        </p>
      </section>

      {/* SEARCH + FILTER */}
      <section className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row gap-4 justify-between items-center">

        <input
          type="text"
          placeholder="Search blogs..."
          className="w-full md:w-1/2 px-4 py-3 rounded-xl border focus:outline-none shadow-sm"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="flex gap-3">
          {["All", "Design", "Development", "SEO"].map((cat) => (
            <button
              key={cat}
              onClick={() => setFilter(cat)}
              className={`px-4 py-2 rounded-full border transition cursor-pointer ${
                filter === cat
                  ? "bg-black text-white"
                  : "bg-white text-black hover:bg-gray-200"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

      </section>

      {/* FEATURED BLOG */}
      <section className="max-w-6xl mx-auto px-6 mb-10">
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg flex flex-col md:flex-row cursor-pointer hover:shadow-2xl transition">

          <img
            src={allBlogs[0].image}
            className="md:w-1/2 h-72 object-cover"
            alt="featured"
          />

          <div className="p-6 flex flex-col justify-center">
            <span className="text-sm text-gray-500">Featured Post</span>
            <h2 className="text-2xl font-bold mt-2 mb-3">
              {allBlogs[0].title}
            </h2>
            <p className="text-gray-600">{allBlogs[0].desc}</p>

            <button className="mt-4 w-fit px-5 py-2 bg-black text-white rounded-full hover:scale-105 transition">
              Read More
            </button>
          </div>

        </div>
      </section>

      {/* BLOG GRID */}
      <section className="max-w-6xl mx-auto px-6 pb-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

          {filteredBlogs.map((blog, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-md hover:shadow-2xl transition cursor-pointer group"
            >
              <img
                src={blog.image}
                className="h-56 w-full object-cover group-hover:scale-110 transition duration-500"
                alt=""
              />

              <div className="p-5">
                <span className="text-xs text-gray-500">
                  {blog.category}
                </span>

                <h2 className="text-lg font-bold mt-2 group-hover:text-black">
                  {blog.title}
                </h2>

                <p className="text-gray-600 text-sm mt-2">
                  {blog.desc}
                </p>

                <button className="mt-4 text-sm font-semibold border-b border-black hover:text-gray-500">
                  Read More →
                </button>
              </div>
            </div>
          ))}

        </div>
      </section>

    </div>
  );
};

export default Blogs;