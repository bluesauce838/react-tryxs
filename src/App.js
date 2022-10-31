import React from "react";
import "./style.css";

export default function App() {
  const alligatorFacts = ["thick scales", 80, "4 foot tail", "rounded snout" ,'xyz', 80];
  if (alligatorFacts.includes("thick scales")){
    console.log("xyz")
  }
  else {
    console.log('not found')
  };
  return (
    <div>
    </div>
  );
  }