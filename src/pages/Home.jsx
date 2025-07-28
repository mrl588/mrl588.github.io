import React from "react";
import { Hero } from "../components/Hero";
import { About } from "../components/About";
import {ArrowDown} from "../components/ArrowDown"
import "./Home.css"

export const Home = () => {
  return (
    <div className="home">
      <Hero />
      <ArrowDown />
      <About />
    </div>
  );
};
