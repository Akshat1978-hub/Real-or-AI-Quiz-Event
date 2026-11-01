import React from "react";
import { BrainCircuit, Trophy } from "lucide-react";

export default function Navbar({ page, onHome, onAdmin }) {
  return (
    <nav className="navbar">
      <button className="brand" onClick={onHome}>
        <BrainCircuit size={28} />
        <span>REAL <b>OR</b> AI?</span>
      </button>
      <div className="nav-right">
        {page === "quiz" && <span className="live-dot">CHALLENGE ACTIVE</span>}
        <button className="icon-btn" title="Admin Dashboard" onClick={onAdmin}><Trophy size={20}/></button>
      </div>
    </nav>
  );
}