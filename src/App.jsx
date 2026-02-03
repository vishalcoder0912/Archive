import React from "react";
import PageStyles from "./styles/PageStyles";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Features from "./components/Features";
import FeaturedCollection from "./Components/FeaturedCollection";
import CraftedWithPassion from "./Components/CraftedWithPassion";
import Footer from "./Components/Footer";

export default function App() {
  return (
    <>
      <PageStyles />
      <div className="choco-verse-app">
        <div className="choco-verse-container">
          <Navbar />
          <Hero />

        </div>

        <div className="choco-verse-container">
          <Features />
        </div>
        <div className="choco-verse-app-continued">
          <FeaturedCollection />
          <CraftedWithPassion />
          <Footer />
        </div>
      </div>
    </>
  );
}
