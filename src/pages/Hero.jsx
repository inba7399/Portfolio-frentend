import React from "react";
import NavBar from "../components/NavBar";
import HeroCover from "../components/HeroCover";
import Button from "../components/Button";

export default function Hero() {
  return (
    <NavBar>
      <div
        className="relative w-full"
        style={{ height: "calc(1500px + 100vh)" }}
      >
        <div style={{height:"200px",display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
         <h1 style={{color:"white",paddingTop:"250px",fontSize:"60px"}} >Hi Iam Inba sagar fullstack devaloper</h1>
         <div style={{marginTop:"50px",display:"flex",flexDirection:"row",marginBottom:"-90px"}}>
         <Button name='Download CV' onclick={()=>{console.log("click")}} />
         </div>        
        </div>
        <HeroCover />
        <div className="absolute bottom-0 left-0 right-0 h-96 bg-gradient-to-b from-zinc-950/0 to-zinc-950" />
      </div>
    </NavBar>
  );
}
