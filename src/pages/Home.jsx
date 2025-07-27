import React from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import "./Home.css"

export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <About />
    </div>
  );
};
