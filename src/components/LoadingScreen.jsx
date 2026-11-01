import React from "react";
import { BrainCircuit } from "lucide-react";
export default function LoadingScreen({ text="ANALYZING YOUR RESULTS..." }) {
  return <div className="loading-screen"><BrainCircuit className="spin" size={56}/><h2>{text}</h2><div className="loading-line"/></div>;
}