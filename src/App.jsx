import { BrowserRouter as Router, Routes, Route } from "react-router-dom";







import Blogs from "./Pages/Blogs";

import Contact from "./Pages/Contact";
import Projects from "./Pages/Project";
import About from "./Pages/About";



import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./Pages/Home";
import AppCohai from "./pages/AppCohai";


function App() {
  return (
    

      <div className="min-h-screen bg-gray-50 flex flex-col">

        {/* NAVBAR */}
        <Navbar />

        {/* PAGES */}
        <main className="grow">

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<About />} />
            <Route path="/Project" element={<Projects />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/app-cohai" element={<AppCohai />} />
          </Routes>

        </main>

        {/* FOOTER */}
      <Footer />

      </div>

   
  );
}

export default App;