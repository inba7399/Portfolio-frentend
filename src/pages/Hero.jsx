import React from "react";
import NavBar from "../components/NavBar";
import HeroCover from "../components/HeroCover";
import TechImages from "../components/TechImages";

export default function Hero() {
  return (
    <NavBar>
      <div
        className="relative w-full"
        style={{ height: "calc(1500px + 100vh)" }}
      >
        <HeroCover />
        <TechImages />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
      </div>
    </NavBar>
  );
}
