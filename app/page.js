import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Hero from "./components/Hero/Hero";
import Line1 from "./components/Line1/Line1";
import VendorCatagory from "./VendorCatagory/VendorCatagory";
import Popular from "./components/Popular/Popular";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import About from "./components/About/about";

function page() {
  return (
    <div className="bgcolors">
      <Navbar />
      <div className="background-div shadow-lg " data-aos="fade-up">
        
        <Hero />
      </div>
      <Line1 />
      <div>
        <VendorCatagory />
      </div>
      <Popular />
      <Featured />
      <About />
      <Footer />
    </div>
  );
}

export default page;
