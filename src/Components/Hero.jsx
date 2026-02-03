// src/components/Hero.jsx
import React from "react";
import { BadgeIcon } from "./Icons";

export default function Hero() {
  return (
    <main className="hero-section">
      <div className="hero-content">
        <span className="badge">
          <BadgeIcon /> Handcrafted Luxury
        </span>

        <h1>
          Indulge in <span className="highlight">Pure Elegance</span>
        </h1>

        <p>
          Discover our exquisite collection of artisanal chocolates, crafted
          with the finest ingredients and adorned with edible gold.
        </p>

        <div className="hero-buttons">
          <button className="btn-primary">Explore Collection →</button>
          <button className="btn-secondary">Our Story</button>
        </div>
      </div>

      <div className="hero-graphic-container">
        <div className="hero-graphic-blur"></div>
        <div className="hero-graphic-image"></div>
      </div>
    </main>
  );
}
