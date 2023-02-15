import React from "react";
//import heroImage from "../images/hero_section_img.png";

export default function Hero() {
  return (
    <section className="hero-section">
      <img
        src="/images/hero_section_img.png"
        alt="airbnb-images"
        className="hero-img"
      ></img>
      <h1 className="hero-heading">Online Experiences</h1>
      <p className="hero-para">
        Join unique interactive activities led by one-of-a-kind hosts--all
        without leaving home.
      </p>
    </section>
  );
}
